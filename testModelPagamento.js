const {Pagamento, sequelize} = require('./database/models');

Pagamento.findByPk(1, {include: 'pedido'}).then(
    u => {
        console.log(u.toJSON());
        sequelize.close();
    }
)