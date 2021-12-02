'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('pedido',

     {
     
     id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
     dataPedido: {type: Sequelize.DataTypes.STRING(256), allowNull: false},
     usuario_id: {
       type: Sequelize.DataTypes.INTEGER, 
       allowNull: false,
       references: {
         model: {
           tableName: 'usuario'
         },
         key:'id'
       }
      },
     status: {type: Sequelize.DataTypes.STRING(45), allowNull: false},
     status_id: {
      type: Sequelize.DataTypes.INTEGER, 
      allowNull: false,
      references: {
        model: {
          tableName: 'status'
        },
        key:'id'
      }
      },
     
    }
     
     );
  },

  down: async (queryInterface, Sequelize) => {
  
    return await queryInterface.dropTable('pedido');
    
  }
};
