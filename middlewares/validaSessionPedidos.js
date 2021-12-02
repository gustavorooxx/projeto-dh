module.exports = (req, res, next) => {
    usuario = req.session.usuario;

    if( usuario.logado == false){
        res.redirect("/login")
    } 
    
    next();
}