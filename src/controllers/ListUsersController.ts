import { Request, Response } from "express";
import { ListUsersServices } from "../services/ListUsersServices";


class ListUsersController{
    async handle(request:Request,response:Response){
        const listUserServices = new ListUsersServices();

        const users = await listUserServices.execute();

        return response.json(users);
    }
}

export {ListUsersController}