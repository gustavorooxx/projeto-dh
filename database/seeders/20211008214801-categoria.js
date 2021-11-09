'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('categoria', [
      {
        id: '1',
        nome: 'Móveis'
      },

      {
        id: '2',
        nome: 'Decoração'
      },

      {
        id: '3',
        nome: 'Lustres'
      },

    ]);



  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('categoria', null);


  }

};
