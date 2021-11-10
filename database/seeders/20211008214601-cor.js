'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('cor', [
      {
        id: '1',
        nome: 'Preto'
      },
      {
        id: '2',
        nome: 'Amarelo'
      },
      {
        id: '3',
        nome: 'Bege'
      },
      {
        id: '4',
        nome: 'Azul'
      },
      {
        id: '5',
        nome: 'Vermelho'
      },
      {
        id: '6',
        nome: 'Branco'
      }

    ]);



  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('cor', null);


  }

};
