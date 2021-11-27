const {Pedido} = require('../database/models')

const CheckoutController = {
    show: (req, res) => {
        res.render('checkout', {usuario: req.session.usuario})
    },

    newOrder: (req, res) => {
        let body = req.body;
        console.log(body);
    }
}

module.exports = CheckoutController;