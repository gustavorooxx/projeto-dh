var express = require('express')
var router = express.Router();

const PagamentoController = require("../controllers/pagamentoController");
const validaSession = require('../middlewares/validaSession');

router.get('/pagamento', validaSession, PagamentoController.show)

module.exports = router;