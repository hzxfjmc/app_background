import * as Router from 'koa-router';
const router = new Router();
import UserInfo  from "../controller/index";

router.get('/*',async (ctx,nex)=>{
   await UserInfo.createUserInfo(ctx)
});

export default router;
