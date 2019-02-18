
import { UserInfo } from "../models/UserInfo";
export class User {
    constructor(){}
    public async createUserInfo(ctx:any){
      ctx.body = ctx.request.body;
      UserInfo.create({name:"xiejin",sex:0})
      let res = await UserInfo.findAll();
      console.log(res);
    }
} 
const UserData = new User();
export default UserData;