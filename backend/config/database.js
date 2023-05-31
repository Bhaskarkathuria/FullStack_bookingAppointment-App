const Sequelize = require('sequelize');

const sequelize=new Sequelize('node-complete','root','Bhaskar@19lv',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize;