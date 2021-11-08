var express = require('express')
var router = express.Router();

const CheckoutController = require("../controllers/checkoutController");
const validaSession = require('../middlewares/validaSession');

router.get('/checkout', validaSession, CheckoutController.show)

module.exports = router; 