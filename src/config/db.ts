
import {Sequelize} from 'sequelize-typescript';
import { Animal } from "../models/animal"
const path = require('path');
const db =  new Sequelize({
  database: 'blog',
  dialect: 'mysql',
  username: 'root',
  port:3306,
  // modelPaths: [path.resolve(__dirname, `./models/${mysqlConfig.modelPath}`)],
  password: '123456',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
console.log("db")
console.log(path.resolve(__dirname,))
db.addModels([Animal])
console.log("dbend")
export default db;