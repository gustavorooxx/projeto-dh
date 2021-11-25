const CheckoutController = {
    show: (req, res) => {
        res.render('checkout', {usuario: req.session.usuario})
    }
}

module.exports = CheckoutController;