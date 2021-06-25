import {EntityRepository,Repository} from 'typeorm';
import { Compliment } from '../entities/Compliment';


@EntityRepository(Compliment)
class complimentsReppositories extends Repository<Compliment>{

}

export {complimentsReppositories};