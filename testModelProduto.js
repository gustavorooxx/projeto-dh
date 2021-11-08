const {Produto, sequelize} = require('./database/models');
const {Categoria} = require('./database/models');

async function showProdutos(){

    let produtos =  await Produto.findAll({include: ['categoria']})
    // let categorias = await Categoria.findAll({include:'produtos'})
    console.log(produtos)
    // console.log(produtos);
    sequelize.close();
    
}

showProdutos();