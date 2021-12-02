const {Usuario} = require('../database/models')
const bcrypt = require('bcrypt');

const LoginController = {
    show: (req, res) => {
        res.render('login' , {usuario:req.session.usuario, alerta: false});
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
            return res.render('login', {alerta: true, mensagem: "Usuário inexistente! ", mensagem2:"Cadastre-se na aba CADASTRO"})
        }

        // Existindo o usuário, validar a senha dele (bcrypt) primeiro parametro(senha sem criptografar)segundo(senha criptografada)
        // Senha inválida retorn erro
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.render('login', {alerta: true, mensagem: "Senha inválida! ", mensagem2: "Tente novamente."})
        }

        //removendo informação sensível do usuário
        // usuario.senha = undefined;

        req.session.usuario = usuario; 

        console.log(req.session.usuario)

        res.redirect("/"); 


    }

}

module.exports = LoginController;