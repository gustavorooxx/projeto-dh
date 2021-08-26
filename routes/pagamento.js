var express = require('express')
var router = express.Router();

const PagamentoController = require("../controllers/pagamentoController")

router.get('/pagamento', PagamentoController.show)

module.exports = router;