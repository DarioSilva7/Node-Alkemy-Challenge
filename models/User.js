const { DataTypes } = require("sequelize")

module.exports = (sequelize)=>{
    sequelize.define('user',{
        name:{
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING(150),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        enable:{
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
}