var express = require('express')
var router = express.Router();
const SobreController = require("../controllers/sobreController");
const validaSession = require('../middlewares/validaSession');

router.get('/sobre-nos', validaSession, SobreController.show)

module.exports = router;