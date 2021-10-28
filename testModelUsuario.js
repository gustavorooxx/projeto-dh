const {Usuario, sequelize} = require('./database/models');

Usuario.findByPk(1, {include: 'pedido'}).then(
    u => {
        console.log(u.toJSON());
        sequelize.close();
    }
)