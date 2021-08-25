var express = require('express')
var router = express.Router();

const CheckoutController = require("../controllers/checkoutController")

router.get('/checkout', CheckoutController.show)

module.exports = router;