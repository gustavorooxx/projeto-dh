
const { Pedido, sequelize } = require('../database/models')
const { format, parseISO } = require('date-fns');
const brLocale = require('date-fns/locale/pt');

const CheckoutController = {
    show: (req, res) => {
        console.log(req.session.usuario)
        res.render('checkout', { usuario: req.session.usuario })
    },

    newOrder: async (req, res) => {


        const produtos = JSON.parse(req.body.produtos);


        const formatDate = format (new Date(), "'Dia' dd 'de' MMMM 'de' yyyy, 'às' HH:mm",
        { locale: brLocale })

        console.log(typeof formatDate);

        var pedido = await Pedido.create({
            dataPedido: formatDate,
            usuario_id: req.session.usuario.id,
            status: 'Pedido Confirmado',
            status_id: '1'
        })

        console.log(pedido);


        const produtoPedido = produtos.map(p => {
            return {
                pedido_id: pedido.id,
                produto_id: p.id,
                quantidade: p.quantidade,
                valor_total: p.total
            }
        })

        sequelize.queryInterface.bulkInsert('pedido_x_produto', produtoPedido);

        setTimeout(() => {
            return res.redirect("/minhaconta/pedidos")
        }, 2000);
    }
}

module.exports = CheckoutController;