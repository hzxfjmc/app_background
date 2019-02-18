
import { UserInfo } from "../models/UserInfo";
import db from '../db';
export class User {
    constructor(){}
    public async createUserInfo(ctx:any){
      ctx.body = ctx.request.body;
      let res = await UserInfo.create({name:'azu',sex:4});
      console.log(res);
      // db.sync({force: true})
      // .then(() => Promise.all([
      //   UserInfo.create<UserInfo>({name: 'azu',sex:1}),
      //   UserInfo.create<UserInfo>({name: 'nelly',sex:0}),
      //   UserInfo.create<UserInfo>({name: 'elisa',sex:0})
      // ])
      // )
    }
} 
const UserData = new User();
export default UserData;