module.exports = (req, res, next) => {
    usuario = req.session.usuario;

    if( usuario.logado == false){
        res.render('login', { alerta: true, mensagem: "Você não está logado! ", mensagem2: "Faça login para continuar com a compra."})
    } 
    
    next();
}