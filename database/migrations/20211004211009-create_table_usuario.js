'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     return await queryInterface.createTable('usuario',

     {
     
     id: {type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
     nome: {type: Sequelize.DataTypes.STRING(45), allowNull: false},
     nick_name: {type: Sequelize.DataTypes.STRING(45), allowNull: false, unique: true},
     email: {type: Sequelize.DataTypes.STRING(45), allowNull: false, unique: true},
     senha: {type: Sequelize.DataTypes.STRING(256), allowNull: false},
     enderecoEntrega: {type: Sequelize.DataTypes.STRING(256), allowNull: false},
     telefone: {type: Sequelize.DataTypes.STRING(45), allowNull: false}
     
    }
     
     );
   
  },

  down: async (queryInterface, Sequelize) => {
    
    return await queryInterface.dropTable('usuario');
  
  }
};

// gera a estrutura do arquivo da migrate = npx sequelize migration:generate --name create_table_usuarios
// executa a migrate = npx sequelize db:migrate
// apaga a ultima migrate = npx sequelize db:migrate:undo
// apaga/reverte todas as migrations = npx sequelize db:migrate:undo:all
// npx sequelize --help para saber mais
