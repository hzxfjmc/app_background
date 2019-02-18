import { InitDbConfig } from './db';
const InitDb = new InitDbConfig();
InitDb.db.sync();

