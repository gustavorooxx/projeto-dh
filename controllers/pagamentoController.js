const PagamentoController = {
    payment: (req, res) => {
        res.render('pagamento')
    },

    checkout: (req, res) => {
        res.render('checkout')
    }
}

module.exports = PagamentoController;