module.exports = (req, res, next) => {

    if(!req.session.usuario){
        req.session.usuario = {nome: 'Visitante', nick_name: 'Logar/Registrar', logado: false}
    }
    
    next();
}