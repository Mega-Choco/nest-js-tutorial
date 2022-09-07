import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entities/user.entity'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host:"34.64.143.187",
    port: 5432,
    username: 'postgres',
    password: 'cocobin',
    database: 'neststudy',
    synchronize: true,
    entities: [User],
    migrations: [],
});

 AppDataSource.initialize();