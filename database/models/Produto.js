module.exports = (sequelize, DataType) => {
    const Produto = sequelize.define(
        'Produto',
        {
            nome: {type: DataType.STRING(45), allowNull: false},
            categoria_id: {type: DataType.INTEGER, allowNull: false},
            preco: {type: DataType.DECIMAL(10,2), allowNull: false},
            descricao: {type:DataType.STRING(1234), allowNull: false},
            imgProduto: {type: DataType.STRING(45), allowNull: false}
        },
        {
            tableName:'produto',
            timestamps: false
        });
    
//Criando relações

        Produto.associate = (models) => {
        
        // Um produto tem uma categoria
        Produto.belongsTo(models.Categoria, {as: 'categoria', foreignKey:'categoria_id'})

        // Um produto tem em muitos pedidos
        Produto.belongsToMany(models.Pedido, {
            
                as: 'pedidos',  //nome do relacionamento
                through:'pedido_x_produto', //nome da tabela intermediária
                foreignKey: 'produto_id', //id do model codado na tabela intermediária
                otherKey: 'pedido_id', // id do model relacionado na tabela intermediária
                timestamps: false,
        })


        }


      return Produto;  
    
}

