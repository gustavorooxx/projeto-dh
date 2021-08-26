var express = require('express')
var router = express.Router();

const ContatoController = require("../controllers/contatoController")

router.get('/contato', ContatoController.show)

module.exports = router;