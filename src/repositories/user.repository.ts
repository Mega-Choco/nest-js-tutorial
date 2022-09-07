import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common/decorators";
import { User } from "@src/entities/user.entity";

@Injectable()
export class UserRepository extends Repository<User>{
    constructor(private dataSource:DataSource){
        super(User,dataSource.createEntityManager());
    }

    async getAll():Promise<User[]|undefined>{
        return await this.createQueryBuilder("user").getMany();
    }

    async findByName(tartgetName:string):Promise<User|undefined>{
        return await this.createQueryBuilder("user").where('user.name = :tartgetName',{tartgetName}).getOne();    
    }

    async addUser(model:User):Promise<void>{
        await this.createQueryBuilder("user").insert()
        .into(User)
        .values(model).execute();
        return;
    }
}