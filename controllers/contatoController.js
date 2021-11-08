const ContatoController = {
    show: (req, res) => {
        res.render('contato', {usuario:req.session.usuario});
    }
}

module.exports = ContatoController;