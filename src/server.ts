
import * as Koa from 'koa';
import { InitDbConfig } from './config/db';
import router from "./routers/index"
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const jwtkoa = require('koa-jwt');
const jwt = require('jsonwebtoken')

app.use(function (ctx, next) {
    return next().catch((err) => {
        if (err.status === 401) {
        ctx.status = 401;
        ctx.body = {
            code:401,
            msg:"token已失效"
        };
        } else {
        throw err;
        }
    });
});
new InitDbConfig();
app.use(bodyParser());
app.use(router.routes())
app.listen(3000);
app.use(jwtkoa({ secret: 'shared-secret' }).unless({ path: [/^\/login/,/^\/register/] }));


