"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor() { }
    async createUserInfo(ctx) {
        console.log(ctx.query);
    }
}
exports.User = User;
const UserInfo = new User();
exports.default = UserInfo;
//# sourceMappingURL=index.js.map