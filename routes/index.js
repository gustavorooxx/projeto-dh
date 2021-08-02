var express = require('express');
var router = express.Router();
const IndexController = require("../controllers/indexController")
const ShopController = require("../controllers/shopController")


router.get('/', IndexController.home)
router.get('/loja', ShopController.shop)

module.exports = router;
