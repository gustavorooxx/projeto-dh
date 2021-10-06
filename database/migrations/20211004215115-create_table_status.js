'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable(
      'status', 
    {
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrment:true},
      nome: {type: Sequelize.DataTypes.STRING(45), allowNull: false}
    }
    );

  },

  down: async (queryInterface, Sequelize) => {
 
    return await queryInterface.dropTable('status');
   
  }
};
