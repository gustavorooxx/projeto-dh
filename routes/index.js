var express = require('express');
var router = express.Router();

const IndexController = require("../controllers/indexController")

router.get('/', IndexController.home)

module.exports = router;
