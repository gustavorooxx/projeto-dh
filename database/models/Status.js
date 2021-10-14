module.exports = (sequelize, DataType) => {
    const Status = sequelize.define(
        'Status',
        {
            nome: {type: DataType.INTEGER, allowNull: false} 
        },
        {
            tableName:'status',
            timestamps: false
        });

    //Criando relações
    
    // Um Status está em muitos pedidos
    Status.associate = (models) => {
        Status.hasMany(models.Pedido, {as: 'pedido', foreignKey:'status_id'})
    }


      return Status;  
    
}