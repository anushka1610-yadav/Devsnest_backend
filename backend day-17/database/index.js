const {Sequelize} = require("sequelize")
const {
    sequelize_database,
    sequelize_username,
    sequelize_password,
    sequelize_host,

    sequelize_dialect,
    SECRET
 }=require("../config")

const sequelize = new Sequelize(
    sequelize_database,
       sequelize_username,
       sequelize_password,
    {
        host:sequelize_host,
        dialect:"postgres"
    }
)

sequelize.sync();

(async()=>{
       try{
           await sequelize.authenticate();
           console.log("Connection with Database succesful")

       }catch(err){
           console.error("Connection with database failed")
       }
})()
