var express = require('express');
var router = express.Router();

const loginController = require("../controllers/loginController");


router.get('/login', loginController.show)

router.post('/', loginController.login)

module.exports = router;
