module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define(
        'Usuario',
        {
            nome: {
                type:DataType.STRING,
                allowNull:false
            }, 
            nick_name: {
                type:DataType.STRING,
                allowNull:false
            },
            email: {
                type:DataType.STRING,
                allowNull:false
            },
            senha: {
                type:DataType.STRING,
                allowNull:false
            },
            enderecoEntrega: {
                type:DataType.STRING,
                allowNull:false
            },
            telefone: {
                type:DataType.STRING,
                allowNull:false
            }
        },
        {
            tableName:'usuario',
            timestamps: false
        });
    
//Criando relações

        Usuario.associate = (models) => {
        
        // Um usuário tem muitos pedidos
        Usuario.hasMany(models.Pedido, {as: 'ps', foreignKey:'usuario_id'})
        
        }

        return Usuario;
        
    
    }