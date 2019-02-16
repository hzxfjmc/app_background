

export class User {
    constructor(){}
    public async createUserInfo(ctx:any){
      console.log(ctx.query)
    }
} 
const UserInfo = new User();
export default UserInfo;