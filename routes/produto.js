var express = require('express')
var router = express.Router();

const ProductController = require("../controllers/produtoController")

router.get('/produto', ProductController.show)

module.exports = router;