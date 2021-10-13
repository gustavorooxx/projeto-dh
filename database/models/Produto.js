module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define(
        'Produto',
        {
            tokenProduto: {type: DataType.STRING(45), allowNull: false},
            categorias_id: {type: DataType.INTEGER, allowNull: false},
            preço: {type: DataType.DECIMAL(10,2), allowNull: false},
            descrição: {type:DataType.MEDIUMTEXT, allowNull: false},
        },
        {
            tableName:'produto',
            timestamps: false
        });
    
//Criando relações

        Produto.associate = (models) => {
        
        // Um pagamento pertence a um pedido
        Produto.belongsTo(models.Categoria, {as: 'categoria', foreignKey:'categoria_id'})


        }


      return Produto;  
    
}

