module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define(
        'Categoria',
        {
            nome: {type: DataType.STRING, allowNull: false} 
        },
        {
            tableName:'categoria',
            timestamps: false
        });

    //Criando relações
    
    // Uma categoria esta em muitos produtos
    Categoria.associate = (models) => {
        Categoria.hasMany(models.Produto, {as: 'produtos', foreignKey:'categoria_id'})
    }


    return Categoria;  
    
}