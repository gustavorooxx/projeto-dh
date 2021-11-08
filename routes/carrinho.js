var express = require('express')
var router = express.Router();

const CartController = require("../controllers/carrinhoController");
const validaSession = require('../middlewares/validaSession');

router.get('/carrinho', validaSession, CartController.show)

module.exports = router;