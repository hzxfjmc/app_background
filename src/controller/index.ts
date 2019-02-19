
const jwt = require('jsonwebtoken')
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
        if(ctx.request.body.name != undefined && ctx.request.body.password !=undefined){
          UserInfo.create(ctx.request.body);
          ctx.body = {
            code:200,
            msg:'注册成功'
          }
        }else{
          ctx.body = {
            code:400,
            msg:'注册失败',
          }
        }
      }else{
        ctx.body = {
          code:200,
          data:res[0],
          msg:'该用户已经注册'
        }
      }
    }

    public async login(ctx:any){
      let res:any = await UserInfo.findAll({
        where:{
          name:ctx.request.body.name,
          password:ctx.request.body.password
        }
      });
      if(res.length == 0) 
      return ctx.body = {
        code:400,
        msg:"登录失败",
      } 
      const token = jwt.sign(res[0].toJSON(), "shared-secret", {expiresIn: '1h'})  //token签名 有效期为1小时
      ctx.body = {
        code:200,
        msg:"登录成功",
        token:token
      }
    }
} 
const UserData = new User();
export default UserData;