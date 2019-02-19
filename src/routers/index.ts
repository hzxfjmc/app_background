import * as Router from 'koa-router';
const router = new Router();
import UserData  from "../controller/index";

/**注册 */
router.post('/api/register',async (ctx,next)=>{
   await UserData.createUserInfo(ctx)
});

/**登录 */
router.post('/api/login',async (ctx,next)=>{
   await UserData.login(ctx)
});

/**获取个人信息 */

export default router;
