var express = require('express')
var router = express.Router();
const SobreController = require("../controllers/sobreController")

router.get('/sobre-nos', SobreController.show)

module.exports = router;