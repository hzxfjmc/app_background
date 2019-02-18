import { InitDbConfig } from './config/db';
const InitDb = new InitDbConfig();
// console.log(__dirname + '/models')
// InitDb.db.addModels([__dirname + '/models'])
InitDb.db.sync();

