import{Request,Response} from 'express';
import { createUserServices } from '../services/CreateUserServices';

class CreateUsersController{

    async handle(request:Request,response:Response){
        
        const{name,email,admin} = request.body;
        const createUserService = new createUserServices();

        const user = await createUserService.execute({name,email,admin});
        
        return response.json(user);
    }
    
}

export {CreateUsersController};