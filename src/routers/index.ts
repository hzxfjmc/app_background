import * as Router from 'koa-router';
const router = new Router();
import UserInfo  from "../controller/index";

router.get('/getUerInfo',async (ctx,nex)=>{
   await UserInfo.createUserInfo(ctx)
});

export default router;
