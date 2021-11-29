const {DataTypes} = require ('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('genre', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        movie: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            unique: true,
            allowNull: false,
        }
    },
    {
        timestamps: false
    })
};