
import { UserInfo } from "../models/UserInfo";
export class User {
    constructor(){}
    public async createUserInfo(ctx:any){
      let res:any = await UserInfo.findAll({
        where:{
          name:ctx.request.body.name
        }
      });
      if(res.length == 0){
        UserInfo.create(ctx.request.body);
        ctx.body = {
          code:200,
          msg:'注册成功'
        }
      }else{
        ctx.body = {
          code:200,
          data:res[0],
          msg:'该用户已经注册'
        }
      }
    }
} 
const UserData = new User();
export default UserData;