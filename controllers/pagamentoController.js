const PagamentoController = {
    show: (req, res) => {
        res.render('pagamento', {usuario:req.session.usuario})
    }  
}

module.exports = PagamentoController;