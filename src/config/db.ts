
import {Sequelize} from 'sequelize-typescript';
import { Animal } from "../models/animal"
const path = require('path');
const db =  new Sequelize({
  database: 'blog',
  dialect: 'mysql',
  host:'101.132.116.101',
  username: 'root',
  port:3306,
  password: '123456',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

db.addModels([Animal])
export default db;