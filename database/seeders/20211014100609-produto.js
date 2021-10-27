'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkInsert('produto', [
      {
         id: '1',
         nome:'lustre',
         categoria_id: '2',
         preco: 300.00,
         descricao: 'lustre banhado a bronze'
      },
      {
        id: '2',
        nome:'cadeira gamer',
        categoria_id: '1',
        preco: 1000.00,
        descricao: 'Cadeira reclinável para gamers'
     },
     {
      id: '3',
      nome:'sofá três lugares',
      categoria_id: '3',
      preco: 1200.00,
      descricao: 'sofá anti acaro de três lugares azul'
      
   },
    
    ]);
 
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('produto', null);
  }
};
