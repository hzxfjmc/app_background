"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const app = new Koa();
const index_1 = require("./routers/index");
app.use(index_1.default.routes());
app.listen(3000);
//# sourceMappingURL=server.js.map