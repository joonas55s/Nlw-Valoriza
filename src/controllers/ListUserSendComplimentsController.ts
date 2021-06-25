import {Request,Response} from 'express';
import { ListUsersSendComplimentsService } from '../services/ListUsersSendComplimentsService';

class ListUserSendComplimentsController{
    async handle(request:Request,response:Response){

        const {user_id} = request;
        const listUserSendCompliments = new ListUsersSendComplimentsService();

        const compliments =await  listUserSendCompliments.execute(user_id);

        return response.json(compliments);
    }
}

export {ListUserSendComplimentsController};