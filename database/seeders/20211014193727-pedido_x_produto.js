'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('pedido_x_produto', [


     {
      pedido_id: 3,
      produto_id:2,
      quantidade:4,
      valor_total:3999.90
   },

   {
    pedido_id: 1,
    produto_id:3,
    quantidade:4,
    valor_total:759.90
 },


    
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('pedido_x_produto', null);
  }
};
