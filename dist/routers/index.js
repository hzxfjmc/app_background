"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
const index_1 = require("../controller/index");
router.get('/*', async (ctx, nex) => {
    await index_1.default.createUserInfo(ctx);
});
exports.default = router;
//# sourceMappingURL=index.js.map