import { getCustomRepository } from "typeorm";
import{tagsRepositories} from '../repositories/tagsRepositories';

class CreateTagService{
    async execute(name:string){
        const tagsReposiories = getCustomRepository(tagsRepositories);

        if(!name){
            throw new Error("Incorrect name!");
        }

        const tagAlreadyExists = await tagsReposiories.findOne({
            name,
        });

        const tag = tagsReposiories.create({
            name,
        });

        await tagsReposiories.save(tag);

        return tag;
    }
}

export {CreateTagService};