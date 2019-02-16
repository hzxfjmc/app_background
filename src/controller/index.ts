import db from '../config/db';

export class User {
    constructor(){}
    public async createUserInfo(ctx:any){
      db
      console.log(ctx.query)
    }
} 
const UserInfo = new User();
export default UserInfo;