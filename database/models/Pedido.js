module.exports = (sequelize, DataType) => {
    const Pedido = sequelize.define(
        'Pedido',
        {
            id: {type: DataType.INTEGER, primaryKey: true},
            dataPedido: {type: DataType.DATE, allowNull: false},
            usuario_id: {type: DataType.INTEGER, allowNull: false},
            status: {type: DataType.STRING(45), allowNull: false},
            status_id: {type: DataType.INTEGER, allowNull: false}, 
        },
        {
            tableName:'pedido',
            timestamps: false
        });
    
//Criando relações

        Pedido.associate = (models) => {
        
        // Um pedido pertence a um usuário
        Pedido.belongsTo(models.Usuario, {as: 'usuario', foreignKey:'usuario_id'})

        // Um pedido tem um pagamento
        Pedido.belongsTo(models.Pagamento, {as:'pagamento', foreignKey:'id'}) 

        //Um pedido tem um Status
        Pedido.belongsTo(models.Status, {as:'statusPedido', foreignKey:'status_id'})

        //Um pedido tem muitos produtos
        Pedido.belongsToMany(models.Produto, {

            as: 'produtos',  //nome do relacionamento
            through:'pedido_x_produto', //nome da tabela intermediária
            foreignKey: 'pedido_id', //id do model codado na tabela intermediária
            otherKey: 'produto_id', // id do model relacionado na tabela intermediária
            timestamps: false,
        })

        }


      return Pedido;  
    
}