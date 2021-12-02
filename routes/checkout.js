var express = require('express')
var router = express.Router();

const CheckoutController = require("../controllers/checkoutController");
const validaSessionCheckout = require('../middlewares/validaSessionCheckout');
const validaSession = require('../middlewares/validaSession')

router.get('/checkout', validaSessionCheckout, CheckoutController.show)

router.post('/minhaconta/pedidos', validaSession, CheckoutController.newOrder)

module.exports = router; 