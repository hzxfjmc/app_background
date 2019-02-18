
import * as Koa from 'koa';
const app = new Koa();
import { InitDbConfig } from './config/db';
const bodyParser = require('koa-bodyparser');
import router from "./routers/index"

new InitDbConfig();
app.use(bodyParser());
app.use(router.routes())
app.listen(3000);
