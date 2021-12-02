var express = require('express');
var router = express.Router();

const IndexController = require("../controllers/indexController");
const validaSession = require('../middlewares/validaSession');

router.get('/', validaSession, IndexController.show)

router.get('/loja/categoria/:categoria_id', validaSession, IndexController.showProductsBanner)

// rota para /busca
router.get('/search', IndexController.busca )

module.exports = router;
