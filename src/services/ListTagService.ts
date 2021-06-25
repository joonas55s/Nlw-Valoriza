import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { tagsRepositories } from "../repositories/tagsRepositories";
import {classToPlain} from 'class-transformer';


class ListTagService{

    async execute(){

        const tagsRepository = getCustomRepository(tagsRepositories);

        const tags = await tagsRepository.find();

        return classToPlain(tags);

    }
}

export {ListTagService}