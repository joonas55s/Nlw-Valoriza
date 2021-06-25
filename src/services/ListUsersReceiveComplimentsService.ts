import { getCustomRepository } from "typeorm";
import { complimentsReppositories } from "../repositories/complimentsReppositories";



class ListUsersReceiveComplimentsService{
    async execute(user_id:string){
        const complimentsRepositories = getCustomRepository(complimentsReppositories);
        
        const compliments = await complimentsRepositories.find({
            where:{
                user_receiver:user_id
            },
            relations:["userSender","userReceiver","tag"]
        });

        return compliments;
    }
}

export {ListUsersReceiveComplimentsService};