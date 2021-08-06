const PagamentoController = {
    payment: (req, res) => {
        res.render('paginaPagamento')
    },

    checkout: (req, res) => {
        res.render('checkout')
    }
}

module.exports = PagamentoController;