'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return await queryInterface.bulkInsert('pedido', [
    {
       id: '1',
       dataPedido: 'Dia 02 de Novembro de 2021, às 13:30',
       usuario_id: '2',
       status: 'Preparando para entrega',
       status_id: '2'
    },
    {
      id: '2',
      dataPedido: 'Dia 05 de Novembro de 2021, às 14:30',
      usuario_id: '1',
      status: 'Pedido Confirmado',
      status_id: '1'
   },
   {
    id: '3',
    dataPedido: 'Dia 06 de Novembro de 2021, às 15:30',
    usuario_id: '3',
    status: 'A caminho do destino',
    status_id: '3'
 },
  
  ]);
    
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('pedido', null);
    
  }
};
