'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('categoria', {

      id: {type:Sequelize.DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      tokenPagamento: {type: SequelizeDataTypes.STRING(45), allowNull: false},
      pedidos_id: {type: SequelizeDataTypes.INTEGER, allowNull: false},
      pedidos_usuario_id: {type: SequelizeDataTypes.INTEGER, allowNull: false}

    });
  },


  down: async (queryInterface, Sequelize) => {
    
    return await queryInterface.dropTable('pagamento');
  }
};
