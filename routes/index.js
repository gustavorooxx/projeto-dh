var express = require('express');
var router = express.Router();
const IndexController = require("../controllers/indexController")
const ContatoController = require("../controllers/contatoController")
const ShopController = require("../controllers/shopController")
const ProductController = require("../controllers/produtoController")
const PagamentoController = require("../controllers/pagamentoController")
const MinhaContaController = require("../controllers/minhaContaController")
const CheckoutController = require("../controllers/checkoutController")
const SobreController = require("../controllers/sobreController")

router.get('/', IndexController.home)
router.get('/loja', ShopController.show)
router.get('/produto', ProductController.show)
router.get('/pagamento', PagamentoController.show)
router.get('/checkout', CheckoutController.show)
router.get('/minhaconta', MinhaContaController.show)
router.get('/contato', ContatoController.show)
router.get('/sobre-nos', SobreController.show)

module.exports = router;
