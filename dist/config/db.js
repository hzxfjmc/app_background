"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const animal_1 = require("../models/animal");
const path = require('path');
const db = new sequelize_typescript_1.Sequelize({
    database: 'blog',
    dialect: 'mysql',
    username: 'root',
    port: 3306,
    // modelPaths: [path.resolve(__dirname, `./models/${mysqlConfig.modelPath}`)],
    password: '123456',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});
console.log("db");
console.log(path.resolve(__dirname));
db.addModels([animal_1.Animal]);
console.log("dbend");
exports.default = db;
//# sourceMappingURL=db.js.map