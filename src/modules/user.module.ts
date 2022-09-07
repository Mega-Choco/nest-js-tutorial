import { Module } from "@nestjs/common";
import { UserController } from "@controllers/user.controller";
import { User } from "@src/entities/user.entity";
import { DataSource } from "typeorm";
import { AppController } from "@src/app.controller";
import { UserRepository } from "@src/repositories/user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[UserController],
    providers:[UserRepository]
})

export class UserModule { }