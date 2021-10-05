module.exports = (sequelize, DataType) => {
    const Pagamento = sequelize.define(
        'Pagamento',
        {
            tokenPagamento: {type: DataType.STRING(45), allowNull: false},
            pedidos_id: {type: DataType.INTEGER, allowNull: false},
            pedidos_usuario_id: {type: DataType.INTEGER, allowNull: false}, 
        },
        {
            tableName:'pagamento',
            timestamps: false
        });
    
//Criando relações

        Pagamento.associate = (models) => {
        
        // Um pagamento pertence a um pedido
        Pagamento.belongsTo(models.Pedido, {as: 'pedido', foreignKey:'pedidos_id'})

        }


      return Pagamento;  
    
}