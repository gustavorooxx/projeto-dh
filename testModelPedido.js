const {Pedido, sequelize} = require('./database/models');

// async function mostrarPedido01 (){
//     let pedido01 =  await Pedido.findByPk(1, {include:['usuario','pagamento', 'statusPedido', 'produtos']});
//     console.log(pedido01.toJSON());
//     sequelize.close();
// }

// mostrarPedido01();

async function mostrarPedidos(){
    let pedidos =  await Pedido.findAll({include:['usuario','pagamento', 'statusPedido', 'produtos']});
    console.log(pedidos);
    sequelize.close();
}

mostrarPedidos();