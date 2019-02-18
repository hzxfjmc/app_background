
import {Sequelize} from 'sequelize-typescript';
const path = require("path");
export class InitDbConfig{
  db:any
  constructor(){
    this.db = new Sequelize({
      database: 'blog',
      dialect: 'mysql',
      host:'101.132.116.101',
      username: 'root',
      port:3308,
      password: '123456',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      modelPaths: [
        path.resolve(__dirname,'../models')
      ],
      define: {
        underscored: false,
        freezeTableName: false,
        timestamps: false
      }
    });
  }
  public InitConfig(){

  }
}
// const db =  
// export default db;