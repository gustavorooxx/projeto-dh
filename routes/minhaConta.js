var express = require('express')
var router = express.Router();

const MinhaContaController = require("../controllers/minhaContaController")

router.get('/minhaconta', MinhaContaController.show)

module.exports = router;