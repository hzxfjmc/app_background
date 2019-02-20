
import * as Koa from 'koa';
import { InitDbConfig } from './config/db';
import router from "./routers/index"
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const jwtkoa = require('koa-jwt');
const koaBody = require('koa-body');


app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024  // 设置上传文件大小最大限制，默认2M
    }
}));
app.use(async (ctx, next)=>{
    return next().catch((err) => {
        if (err.status === 401) {
        ctx.status = 401;
        ctx.body = {
            code:401,
            msg:"token已失效"
        };
        }else {
            throw err;
        }
    });
});

app.use(jwtkoa({ secret: 'token'}).unless({ path: [/^\/api\/login/,/^\/api\/register/,/^\/public/]}));
new InitDbConfig();
app.use(bodyParser());

app.use(router.routes());
app.listen(3000);



