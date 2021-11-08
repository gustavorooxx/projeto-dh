const CartController = {
    show: (req, res) => {
        res.render('carrinho', {usuario:req.session.usuario})
    }
}

module.exports = CartController;