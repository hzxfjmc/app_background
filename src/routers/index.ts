import * as Router from 'koa-router';
const router = new Router();
import UserData  from "../controller/user";
import Upload  from "../controller/public";
/**注册 */
router.post('/api/register',async (ctx,next)=>{
   await UserData.createUserInfo(ctx)
});

/**登录 */
router.post('/api/login',async (ctx,next)=>{
   await UserData.login(ctx)
});

/**获取个人信息 */
router.get('/api/get_user_info',async (ctx,next)=>{
   await UserData.getUserInfo(ctx)
});

/**上传文件 */
router.post('/public/upload',async (ctx,next)=>{
   await Upload.uploadFile(ctx)
});

export default router;
