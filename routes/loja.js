var express = require('express')
var router = express.Router();

const ShopController = require("../controllers/shopController");
const validaSession = require('../middlewares/validaSession');

router.get('/loja',validaSession, ShopController.show)

router.get('/loja/produto/:id', validaSession, ShopController.showProduct)

router.get('/loja/cor/:cor_id', validaSession, ShopController.colorFilters)

router.get('/loja/preco', validaSession, ShopController.priceFilter)


module.exports = router;