'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return await queryInterface.bulkInsert('usuario', [
    
      {
        id: '1',
        nome: 'Gustavo Chagas Souto',
        nick_name: 'gustavochagas',
        email: 'gustavo@your-home.com',
        senha: bcrypt.hashSync('123456', 10),
        enderecoEntrega: 'Av. Armando Salles de Oliveira, 2160 Suzano,SP',
        telefone: '119666-6868'
     },
     {
      id: '2',
      nome: 'Melissa Amorim',
      nick_name: 'melamorim',
      email: 'melissa@your-home.com',
      senha: bcrypt.hashSync('123456', 10),
      enderecoEntrega: 'Rua das Acácias, 2160 São Paulo,SP',
      telefone: '1196667-6768'
    },
    {
      id: '3',
      nome: 'Pedro Schil',
      nick_name: 'pedroschil',
      email: 'pedro@your-home.com',
      senha: bcrypt.hashSync('123456', 10),
      enderecoEntrega: 'Rua Tiradentes, 34 Suzano,SP',
      telefone: '119888-4545'
   }
    
    ]);
  
  },

  down: async (queryInterface, Sequelize) => {
   
   return await queryInterface.bulkDelete('usuario', null);
     
  }
};
