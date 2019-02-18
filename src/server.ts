
import * as Koa from 'koa';
const app = new Koa();
const bodyParser = require('koa-bodyparser');
import router from "./routers/index"

app.use(bodyParser());
app.use(router.routes())

app.listen(3000);
