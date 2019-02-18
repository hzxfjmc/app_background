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
            let res = yield UserInfo_1.UserInfo.create({ name: 'azu', sex: 4 });
            console.log(res);
            // db.sync({force: true})
            // .then(() => Promise.all([
            //   UserInfo.create<UserInfo>({name: 'azu',sex:1}),
            //   UserInfo.create<UserInfo>({name: 'nelly',sex:0}),
            //   UserInfo.create<UserInfo>({name: 'elisa',sex:0})
            // ])
            // )
        });
    }
}
exports.User = User;
const UserData = new User();
exports.default = UserData;
//# sourceMappingURL=index.js.map