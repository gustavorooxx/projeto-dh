var express = require('express')
var router = express.Router();

const ProductController = require("../controllers/produtoController");
const validaSession = require('../middlewares/validaSession');

router.get('/produto', validaSession, ProductController.show)

module.exports = router;