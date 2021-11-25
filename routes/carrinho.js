var express = require('express')
var router = express.Router();

const CartController = require("../controllers/carrinhoController");
const CheckoutController = require("../controllers/checkoutController")
const validaSession = require('../middlewares/validaSession');
const validaSessionCheckout = require('../middlewares/validaSessionCheckout');

router.get('/carrinho', validaSession, CartController.show)

router.post('/checkout', validaSessionCheckout, CheckoutController.show )

module.exports = router;