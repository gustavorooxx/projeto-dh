module.exports = (sequelize, DataType) => {
    const Status = sequelize.define(
        'Status',
        {
            nome: {type: DataType.DATE, allowNull: false} 
        },
        {
            tableName:'status',
            timestamps: false
        });


      return Status;  
    
}