'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('pagamento', {

      id: {type:Sequelize.DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      tokenPagamento: {type: Sequelize.DataTypes.STRING(256), allowNull: false},
      pedido_id: {
        type: Sequelize.DataTypes.INTEGER, 
        allowNull: false,
        references: {
          model: {
            tableName: 'pedido'
          },
          key:'id'
        }
      
      },
      pedido_usuario_id: {
        type: Sequelize.DataTypes.INTEGER, 
        allowNull: false,
        references: {
          model: {
            tableName: 'usuario'
          },
          key:'id'
        }
      }

    });
  },


  down: async (queryInterface, Sequelize) => {
    
    return await queryInterface.dropTable('pagamento');
  }
};
