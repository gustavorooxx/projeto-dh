var express = require('express');
var router = express.Router();

const loginController = require("../controllers/loginController");
const validaSession = require("../middlewares/validaSession")


router.get('/login', loginController.show)

router.post('/', validaSession, loginController.registrar)

router.post('/loja', validaSession, loginController.login)


module.exports = router;
