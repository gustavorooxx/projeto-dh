const {Usuario, sequelize} = require('./database/models');

Usuario.findByPk(1, {include: 'ps'}).then(
    u => {
        console.log(u.toJSON());
        sequelize.close();
    }
)