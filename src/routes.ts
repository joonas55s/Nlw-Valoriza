import {Router} from 'express';
import {CreateUsersController} from './controllers/CreateUsersController';
import {CreateTagController } from './controllers/CreateTagController';
import {ensureAdmin} from './middleware/EnsureAdmin';
import {EnsureAuthenticated} from './middleware/EnsureAuthenticated';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';
const router = Router();

const createUserController = new CreateUsersController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController;
const listUsersController = new ListUsersController;

router.post("/users",createUserController.handle);
router.post("/tags",EnsureAuthenticated,ensureAdmin,createTagController.handle)
router.post("/login",authenticateUserController.handle);
router.post("/compliment",EnsureAuthenticated,createComplimentController.handle);

router.get("/users/compliments/send",EnsureAuthenticated,listUserSendComplimentsController.handle);
router.get("/users/compliments/receive",EnsureAuthenticated,listUserReceiveComplimentsController.handle);
router.get("/tags",listTagsController.handle);
router.get("/users",listUsersController.handle);

export{router};