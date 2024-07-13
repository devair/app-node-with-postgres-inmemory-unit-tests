import { Repository } from 'typeorm';
import { User } from '../entities/User';
import { UserEntity } from '../entities/UserEntity';
import { AppDataSource } from '../data-source';



export class UserRepository {
    
    private repository: Repository<User>
    
    constructor(){
        this.repository = AppDataSource.getRepository(UserEntity)
    }

    async create( user: User ): Promise<User> {
        const categoryCreated = await this.repository.save(user)
        return categoryCreated
    }
    

    async list(): Promise<User[]> {
        const all = await this.repository.find()

        return all
    }

    async findByName(name: string): Promise<User[]> {
        const categories = await this.repository
        .createQueryBuilder('users')
        .where('LOWER(name) LIKE :pattern', { pattern: `%${ name.toLowerCase() }%` })                                    
        .getMany()

        return categories
    }
}