const {Usuario} = require('../database/models')
const bcrypt = require('bcrypt');

const LoginController = {
    show: (req, res) => {
        res.render('login');
    },

    login: async (req, res) => {

        //capturar info do body
        let {email, senha} = req.body; 
        // console.log(email, senha);

        //Pesquisar usuario no BD
        const usuario = await Usuario.findOne({where:{email:email}})
        // console.log(usuario)
        //Se não existir usuário, retorna erro
        if(!usuario){
            return res.status(403).json({erro:1, msg:"Acesso negado, não existe esse usuário"})
        }

        // Existindo o usuário, validar a senha dele (bcrypt) primeiro parametro(senha sem criptografar) 
        // segundo(senha criptografada)
        // Senha inválida retorn erro
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(403).json({erro:1, msg:"Acesso negado, senha inválida"})
        }

        //removendo informação sensível do usuário
        usuario.senha = undefined;

        req.session.usuario = usuario; 


        res.redirect("/"); 

    }

}

module.exports = LoginController;