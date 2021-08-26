var express = require('express')
var router = express.Router();

const CartController = require("../controllers/carrinhoController")

router.get('/carrinho', CartController.show)

module.exports = router;