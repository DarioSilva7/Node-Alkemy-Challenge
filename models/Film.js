const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('film', {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        releaseDate: {
            type: DataTypes.DATE,
            // allowNull: false,
        },
        ranking: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
              min: 0,
              max: 5,
            }
        }
    },
        {
            timestamps: false
        }
    )
}