var express = require('express')
var router = express.Router();

const CheckoutController = require("../controllers/checkoutController");
const validaSessionCheckout = require('../middlewares/validaSessionCheckout');

router.get('/checkout', validaSessionCheckout, CheckoutController.show)

module.exports = router; 