import { UsersRepositories } from "../repositories/usersRepositories";
import {getCustomRepository} from "typeorm";

interface Props{
    name:string;
    email:string;
    admin?:boolean;
}


class createUserServices{
    async execute({name,email,admin}:Props){
        try{

            const userRepository= await getCustomRepository(UsersRepositories);

            if(!email){
                throw new Error("Email incorrect");
            }
            const userAlreadyExist = await userRepository.findOne({
                email
            });

            if(userAlreadyExist){
                throw new Error("User already exist");
            }

            const user = userRepository.create({
                name,
                email,
                admin
            });

            await userRepository.save(user);

            return user;
        }catch(err){
            console.log(err);
        }
    }
}

export  {createUserServices};