const CartController = {
    show: (req, res) => {
        res.render('carrinho', {usuario:req.session.usuario})
    },

    goToCheckout: (req, res) => {
        res.render('checkout', {usuario: req.session.usuario})
    }
    
}

module.exports = CartController;