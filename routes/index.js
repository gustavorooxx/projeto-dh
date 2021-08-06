var express = require('express');
var router = express.Router();
const IndexController = require("../controllers/indexController")
const ShopController = require("../controllers/shopController")
const ProductController = require("../controllers/produtoController")
const PagamentoController = require("../controllers/pagamentoController")
const MinhaContaController = require("../controllers/minhaContaController")

router.get('/', IndexController.home)
router.get('/loja', ShopController.shop)
router.get('/produto', ProductController.product)
router.get('/pagamento', PagamentoController.payment)
router.get('/minhaconta', MinhaContaController.myAccount)

module.exports = router;
