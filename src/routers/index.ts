import * as Router from 'koa-router';
const router = new Router();
import UserData  from "../controller/index";

router.post('/register',async (ctx,next)=>{
   await UserData.createUserInfo(ctx)
});

export default router;
