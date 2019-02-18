import { InitDbConfig } from './config/db';
const InitDb = new InitDbConfig();
//初始化数据库
// console.log(__dirname + '/models')
// InitDb.db.addModels([__dirname + '/models'])
InitDb.db.sync();

