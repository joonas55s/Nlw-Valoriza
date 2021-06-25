import { getCustomRepository } from "typeorm";
import {compare} from 'bcryptjs';
import { UsersRepositories } from "../repositories/usersRepositories";
import { User } from "../entities/User";
import {sign} from 'jsonwebtoken';

interface AuthenticateRequestProps{
    email:string;
    password:string;
}

class AuthenticateUserService{
    async execute({email,password}:AuthenticateRequestProps){
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("email/password incorrect");
        }

        const passwordMatch = await compare(password,user.password);

        if(!passwordMatch){
            throw new Error("email/password incorrect");
        }

        const token = sign({
            email:user.email,   
        },"aprendendo",{
            subject: user.id,
            expiresIn:"1d"
        });
        return token;
    }
}

export {AuthenticateUserService};