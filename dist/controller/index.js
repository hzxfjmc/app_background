"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserInfo_1 = require("../models/UserInfo");
class User {
    constructor() { }
    createUserInfo(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = ctx.request.body;
            UserInfo_1.UserInfo.create({ name: "xiejin", sex: 0 });
            let res = yield UserInfo_1.UserInfo.findAll();
            console.log(res);
        });
    }
}
exports.User = User;
const UserData = new User();
exports.default = UserData;
//# sourceMappingURL=index.js.map