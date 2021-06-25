import { UsersRepositories } from "../repositories/usersRepositories";
import {getCustomRepository} from "typeorm";
import { hash } from "bcryptjs";

interface Props{
    name:string;
    email:string;
    admin?:boolean;
    password:string;
}


class createUserServices{
    async execute({name,email,admin=false,password}:Props){
       
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
            const passwordHash = await hash(password,8);
            const user = userRepository.create({
                name,
                email,
                admin,
                password : passwordHash
            });

            await userRepository.save(user);

            return user;

    }
}

export  {createUserServices};