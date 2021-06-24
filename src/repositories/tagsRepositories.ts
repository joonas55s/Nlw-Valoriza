import {EntityRepository,Repository} from 'typeorm';
import {Tag} from '../entities/Tag';

@EntityRepository(Tag)
class tagsRepositories extends Repository<Tag>{

}

export {tagsRepositories};