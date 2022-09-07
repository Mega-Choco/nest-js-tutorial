import { Controller,Get,Post,Delete,Put,Param } from '@nestjs/common';
import { User } from "@entites/user.entity";
import { Body } from '@nestjs/common';
import { UserRepository } from '@src/repositories/user.repository';

@Controller('user')
export class UserController {
constructor(
    private userRepository: UserRepository,
){}
    @Get()
    async findAll():Promise<User[]>{
        return await this.userRepository.getAll();
    }

    @Get(":name")
    async findOne(@Param('name') name:string):Promise<User>{
        return await this.userRepository.findByName(name);
    }
    @Post()
    async create(@Body() model:User){
        return;
    }
}
