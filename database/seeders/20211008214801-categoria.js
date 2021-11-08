'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('categoria', [
      {
        id: '1',
        nome: 'Mesas e Cadeiras'
      },

      {
        id: '2',
        nome: 'Decoração'
      },

      {
        id: '3',
        nome: 'Sofás'
      },

    ]);



  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('categoria', null);


  }

};
