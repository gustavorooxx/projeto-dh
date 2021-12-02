const { Pedido, Usuario, sequelize } = require('../database/models');
const bcrypt = require('bcrypt')
const { QueryTypes } = require('sequelize');

const MinhaContaController = {
    showMenu: async (req, res) => {
        const { id } = req.params;
        // console.log(typeof id)
        const usuarioId = req.session.usuario.id
        const pedidosUsuario = await Pedido.findAll({ where: { usuario_id: usuarioId } })
        res.render('minhaconta', { usuario: req.session.usuario, id: id, pedidos: pedidosUsuario, alerta: false })
    },

    editar: async (req, res) => {
        const id = req.session.usuario.id
        const { nome, nick_name, email, senha, newPass, confirmPass } = req.body
        const usuario = await Usuario.findOne({ where: { id: id } })


        if (senha == '' || newPass == '') {

            const update = await Usuario.update({
                nome: nome,
                nick_name: nick_name,
                email: email,
            },
                {
                    where: { id }
                })


            req.session.usuario = { id, nome, nick_name, email };

            setTimeout(() => {
                res.redirect('/minhaconta/editar');
            }, 2500);

        } else if (!bcrypt.compareSync(senha, usuario.senha)) {
            const usuarioId = req.session.usuario.id
            const pedidosUsuario = await Pedido.findAll({ where: { usuario_id: usuarioId } })
            return res.render('minhaconta', {
                usuario: req.session.usuario,
                id: 'editar',
                pedidos: pedidosUsuario,
                alerta: true,
                mensagem: "Senha atual inválida! ",
                mensagem2: "Tente novamente."
            })
        } else if (confirmPass == '') {
            const usuarioId = req.session.usuario.id
            const pedidosUsuario = await Pedido.findAll({ where: { usuario_id: usuarioId } })
            return res.render('minhaconta', {
                usuario: req.session.usuario,
                id: 'editar',
                pedidos: pedidosUsuario,
                alerta: true,
                mensagem: "Confirme a senha! ",
                mensagem2: "Tente novamente."
            })
        } else if (newPass == confirmPass) {
            const updateAll = await Usuario.update({
                nome: nome,
                nick_name: nick_name,
                email: email,
                senha: bcrypt.hashSync(confirmPass, 10)
            },
                {
                    where: { id }
                })

            const usuario2 = await Usuario.findOne({ where: { id: id } })

            req.session.usuario = usuario2;

            console.log(req.session.usuario)

            setTimeout(() => {
                res.redirect('/minhaconta/editar');
            }, 2500);

        } else{
            const usuarioId = req.session.usuario.id
            const pedidosUsuario = await Pedido.findAll({ where: { usuario_id: usuarioId } })
            return res.render('minhaconta', {
                usuario: req.session.usuario,
                id: 'editar',
                pedidos: pedidosUsuario,
                alerta: true,
                mensagem: "A confirmação de senha não está correta!",
                mensagem2: "Tente novamente."
            })
        }


    },

    showOrder: async (req, res) => {
        const { idPedido } = req.params;
        const usuarioId = req.session.usuario.id
        const pedido = await sequelize.query("SELECT * FROM `pedido_x_produto` inner join produto ON pedido_x_produto.produto_id = produto.id WHERE pedido_id = :pedidoId ", {
            replacements: { pedidoId: idPedido },
            type: QueryTypes.SELECT
        });



        res.render('pedido', { usuario: req.session.usuario, pedidos: pedido });
    }

}

module.exports = MinhaContaController;