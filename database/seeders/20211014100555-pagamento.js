'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('pagamento', [
      {
         id: '1',
         tokenPagamento: '81dc9bdb52d04dc20036dbd8313ed055',
         pedido_id:'1',
         pedido_usuario_id: '2',
         
      },
      {
        id: '2',
        tokenPagamento: 'b9a4a9706b4c1c6dd4ac5dcb54b96204',
        pedido_id:'2',
        pedido_usuario_id: '1',

     },
     {
      id: '3',
      tokenPagamento: '78b91366b15c399bd05530e96d28a530',
      pedido_id:'3',
      pedido_usuario_id: '3',
   },
    
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
    return await queryInterface.bulkDelete('pagamento', null);
  }
};

