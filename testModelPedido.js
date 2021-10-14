const {Pedido, sequelize} = require('./database/models');

async function mostrarPedido01 (){
    let pedido01 =  await Pedido.findByPk(1, {include:['usuario','statusPedido','pagamento','produtos']});
    console.log(pedido01);
    sequelize.close();
}

mostrarPedido01();