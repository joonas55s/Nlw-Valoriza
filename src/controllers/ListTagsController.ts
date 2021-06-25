import { Request,Response } from "express";
import { ListTagService } from "../services/ListTagService";



class ListTagsController{
    async handle(request:Request,response:Response){
        const listTagServices = new ListTagService();

        const tags = await listTagServices.execute();

        return response.json(tags);
    }
}

export {ListTagsController}