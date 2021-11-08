var express = require('express')
var router = express.Router();

const ContatoController = require("../controllers/contatoController");
const validaSession = require('../middlewares/validaSession');

router.get('/contato', validaSession, ContatoController.show)

module.exports = router;