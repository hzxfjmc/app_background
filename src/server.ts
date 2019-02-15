
import * as Koa from 'koa';
const app = new Koa();
import router from "./routers/index"

app.use(router.routes())

app.listen(3000);
