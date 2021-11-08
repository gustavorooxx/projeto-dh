var express = require('express');
var router = express.Router();

const IndexController = require("../controllers/indexController");
const validaSession = require('../middlewares/validaSession');

router.get('/', validaSession, IndexController.show)

module.exports = router;
