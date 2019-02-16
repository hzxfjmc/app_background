"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
class User {
    constructor() { }
    async createUserInfo(ctx) {
        db_1.default;
        console.log(ctx.query);
    }
}
exports.User = User;
const UserInfo = new User();
exports.default = UserInfo;
//# sourceMappingURL=index.js.map