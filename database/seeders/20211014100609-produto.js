'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkInsert('produto', [
      {
        id: '1',
        nome: 'Cesto decorativo',
        categoria_id: '2',
        cor_id: '3',
        preco: 200.00,
        descricao: 'lustre banhado a bronze',
        imgProduto: '/images/produtos/cesto.jpg'
      },
      {
        id: '2',
        nome: 'Cadeira Anatômica',
        categoria_id: '1',
        cor_id: '6',
        preco: 250.00,
        descricao: 'Cadeira Anatômica decorativa',
        imgProduto: '/images/produtos/cadeira-anatomica.jpg'
      },
      {
        id: '3',
        nome: 'Relógio Clássico Preto',
        categoria_id: '2',
        cor_id: '1',
        preco: 75.80,
        descricao: 'Relógio preto clássico decorativo',
        imgProduto: '/images/produtos/relogio1.jpg'

      },
      {
        id: '4',
        nome: 'Lustre Luxo Preto',
        categoria_id: '3',
        cor_id: '1',
        preco: 125.40,
        descricao: 'Lustre preto luxuoso para sua mesa',
        imgProduto: '/images/produtos/lustre-01.jpg'

      },
      {
        id: '5',
        nome: 'Mini Mesa de Centro',
        categoria_id: '1',
        cor_id: '3',
        preco: 355.50,
        descricao: 'Mesa de centro para sua sala',
        imgProduto: '/images/produtos/mesa-de-centro.jpg'

      },
      {
        id: '6',
        nome: 'Mesa de Centro Redonda',
        categoria_id: '1',
        cor_id: '3',
        preco: 385.90,
        descricao: 'Mesa de centro redonda para sua sala',
        imgProduto: '/images/produtos/mesa-de-centro2.jpg'

      },
      {
        id: '7',
        nome: 'Vaso Decor Deluxe',
        categoria_id: '2',
        cor_id: '2',
        preco: 55.85,
        descricao: 'Vaso decorativo para sua casa',
        imgProduto: '/images/produtos/vaso-01.jpg'

      },

      {
        id: '8',
        nome: 'Lustre Luxo Redondo',
        categoria_id: '3',
        cor_id: '2',
        preco: 55.90,
        descricao: 'Vaso decorativo para sua casa',
        imgProduto: '/images/produtos/lustre-02.jpg'

      },



    ]);

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('produto', null);
  }
};
