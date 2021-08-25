var express = require('express')
var router = express.Router();

const ShopController = require("../controllers/shopController")

router.get('/loja', ShopController.show)

module.exports = router;