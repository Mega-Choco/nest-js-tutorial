import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from './entities/user.entity'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'kochiya',
    database: 'nesttutorial',
    synchronize: true,
    entities: [User],
    migrations: [__dirname + '/src/migrations'],
});

AppDataSource.initialize();