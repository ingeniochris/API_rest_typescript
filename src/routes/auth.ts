import {Router} from 'express';
import {authStart} from '../controllers/authCtrl'

const router : Router = Router();

router.route("/").
                get(authStart);


export default router;