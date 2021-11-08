const MinhaContaController = {
    show: (req, res) => {
        res.render('minhaConta', {usuario:req.session.usuario})
    }
}

module.exports = MinhaContaController;