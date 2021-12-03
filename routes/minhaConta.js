var express = require('express')
var router = express.Router();

const MinhaContaController = require("../controllers/minhaContaController");
const validaSession = require('../middlewares/validaSession');
const validaSessionPedidos = require('../middlewares/validaSessionPedidos');

//rota para o perfil
router.get('/minhaconta/:id', validaSession, MinhaContaController.showMenu)

//rota para editar info usuario
router.put('/minhaconta/editar', validaSession, MinhaContaController.editar)

//rota para exibir produtos
router.get('/minhaconta/pedidos/:idPedido', validaSessionPedidos, MinhaContaController.showOrder)

//logout
router.get('/logout', validaSession, MinhaContaController.logout)

module.exports = router;