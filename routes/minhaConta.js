var express = require('express')
var router = express.Router();

const MinhaContaController = require("../controllers/minhaContaController");
const validaSession = require('../middlewares/validaSession');

router.get('/minhaconta', validaSession, MinhaContaController.show)

module.exports = router;