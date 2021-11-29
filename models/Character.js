const { DataTypes } = require('sequelize');

module.exports = (sequelize)=> {
    sequelize.define('character', {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weight:{
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        history:{
            type: DataTypes.TEXT
        }
    },{
        timestamps: false
    })
}