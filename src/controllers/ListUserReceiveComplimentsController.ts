import { Request, Response } from 'express';
import { ListUsersReceiveComplimentsService } from '../services/ListUsersReceiveComplimentsService';


class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;
        const listUserReceiveCompliments = new ListUsersReceiveComplimentsService();

        const compliments = await listUserReceiveCompliments.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserReceiveComplimentsController };