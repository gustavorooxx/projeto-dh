const SobreController = {
    show: (req, res) => {
        res.render('sobre-nos', {usuario:req.session.usuario})
    }
}

module.exports = SobreController;