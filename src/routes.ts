import {Router} from 'express';
import {CreateUsersController} from './controllers/CreateUsersController';
import {CreateTagController } from './controllers/CreateTagController';
import {ensureAdmin} from './middleware/EnsureAdmin';
const router = Router();

const createUserController = new CreateUsersController();
const createTagController = new CreateTagController();

router.post("/users",createUserController.handle);
router.post("/tags",ensureAdmin,createTagController.handle)


export{router};