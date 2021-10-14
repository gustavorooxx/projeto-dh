'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('produto', {

      id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
      nome: {type: Sequelize.DataTypes.STRING(45), allowNull: false},
      preco: {type: Sequelize.DataTypes.DECIMAL(10, 2), allowNull: false},
      descricao: {type: Sequelize.DataTypes.STRING(3000), allowNull: false},
      categoria_id: {
        type: Sequelize.DataTypes.INTEGER, 
        allowNull: false,
        references: {
          model: {
            tableName: 'categoria'
          },
          key:'id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('produto');
  }
};
