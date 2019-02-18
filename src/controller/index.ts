
import { UserInfo } from "../models/UserInfo";
export class User {
    constructor(){}
    public async createUserInfo(ctx:any){
      let res:any = await UserInfo.findAll({
        where:{
          name:'xiejin1'
        }
      });
      ctx.body = res;
      console.log(res);
    }
} 
const UserData = new User();
export default UserData;