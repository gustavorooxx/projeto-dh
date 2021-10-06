module.exports = (sequelize, DataType) => {
    const Pedido = sequelize.define(
        'Pedido',
        {
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
        Pedido.belongsTo(models.Pagamento, {as:'pagamento', foreignKey:'pedido_id'})

        //Um pedido tem um Status
        Pedido.belongsTo(models.Status, {as:'status', foreignKey:'status_id'})

        }


      return Pedido;  
    
}