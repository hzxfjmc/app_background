import * as Router from 'koa-router';
const router = new Router();
import UserData  from "../controller/index";

router.post('/login',async (ctx,next)=>{
   await UserData.createUserInfo(ctx)
});

export default router;
