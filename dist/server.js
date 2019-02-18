"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
const db_1 = require("./config/db");
const bodyParser = require('koa-bodyparser');
const index_1 = require("./routers/index");
new db_1.InitDbConfig();
app.use(bodyParser());
app.use(index_1.default.routes());
app.listen(3000);
//# sourceMappingURL=server.js.map