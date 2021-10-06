'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('status', [
      {
        id: '1',
        nome: 'Pedido Confirmado',
      },
      {
        id: '2',
        nome: 'Preparando para entrega',
      },
      {
        id: '3',
        nome: 'A caminho do destino',
      },

    ]);

  },

  down: async (queryInterface, Sequelize) => {
    
    return await queryInterface.bulkDelete('status', null);
     
  }
};
