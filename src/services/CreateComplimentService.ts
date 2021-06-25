import { getCustomRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import { complimentsReppositories } from "../repositories/complimentsReppositories";
import { UsersRepositories } from "../repositories/usersRepositories";

interface IComplimentRequest{
    tag_id:string;
    user_sender:string;
    user_receiver:string;
    message:string;
}
class CreateComplimentService{

    async execute({tag_id,user_sender,user_receiver,message}:IComplimentRequest){
        const complimentRepository = getCustomRepository(complimentsReppositories);
        const userRepositories = getCustomRepository(UsersRepositories);

        if(user_sender === user_receiver){
            throw new Error("Incorrect user receiver");
            
        }

        const userReceiverExist =await userRepositories.findOne(user_receiver);

        if(!userReceiverExist){
            throw new Error("User Receiver does not exist!");
        }
        const compliment = complimentRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentRepository.save(compliment);

        return compliment;
    }
}

export {CreateComplimentService};