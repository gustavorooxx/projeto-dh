'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('categoria', {

      id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
      nome: {type: Sequelize.DataTypes.STRING(45), allowNull: false},
      categorias_id: {type: SequelizeDataTypes.INTEGER, allowNull: false},
      preço: {type: SequelizeDataTypes.DECIMAL(10,2), allowNull: false},
      descrição: {type:SequelizeDataTypes.MEDIUMTEXT, allowNull: false},
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('produto');
  }
};
