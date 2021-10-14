'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('pedido_x_produto',

    {
    
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

    produto_id:{
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'produto'
        },
        key:'id'
      }

    },

    quantidade:{ type: Sequelize.DataTypes.INTEGER, allowNull: false},
    valor_total: {type: Sequelize.DataTypes.DECIMAL(10, 2), allowNull: false} 
    
    
   }
    
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('pedido_x_produto');
  }
};
