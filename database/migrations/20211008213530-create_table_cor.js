'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable('cor', {

      id: {type:Sequelize.DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
      nome: {type:Sequelize.DataTypes.STRING(45), allowNull:false}

    });
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.dropTable('cor');
    
  }
};
