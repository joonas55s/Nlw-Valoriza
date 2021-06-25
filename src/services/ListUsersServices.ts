import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/usersRepositories"
import {classToPlain} from 'class-transformer';

class ListUsersServices{

    async execute(){
        const userRepositorie = getCustomRepository(UsersRepositories);

        const users = userRepositorie.find();

        return classToPlain(users);
    }
}

export {ListUsersServices}