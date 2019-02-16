"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const animal_1 = require("../models/animal");
const path = require('path');
const db = new sequelize_typescript_1.Sequelize({
    database: 'blog',
    dialect: 'mysql',
    host: '101.132.116.101',
    username: 'root',
    port: 3306,
    password: '123456',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
db.addModels([animal_1.Animal]);
exports.default = db;
//# sourceMappingURL=db.js.map