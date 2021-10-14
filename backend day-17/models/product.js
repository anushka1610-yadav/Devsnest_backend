const {DataTypes} = require('sequelize');
const sequelize = require('../database');

module.export = sequelize.define("products", {
    //product id
    id : {
        type: DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    title : {
        type: DataTypes.STRING,
        allowNull : false
    },
    price : {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    count : {
        type: DataTypes.INTEGER,
        allowNull : false
    },
    description : {
        type: DataTypes.TEXT
    },
    image : {
        type: DataTypes.STRING,
    }
})