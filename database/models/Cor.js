module.exports = (sequelize, DataType) => {
    const Cor = sequelize.define(
        'Cor',
        {
            nome: {type: DataType.STRING, allowNull: false} 
        },
        {
            tableName:'cor',
            timestamps: false
        });

    //Criando relações
    
    // Uma Cor esta em muitos produtos
    Cor.associate = (models) => {
        Cor.hasMany(models.Produto, {as: 'produtos', foreignKey:'cor_id'})
    }


    return Cor;  
    
}