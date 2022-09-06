import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module'
import { User } from './entities/user.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'kochiya',
    database: 'nesttutorial',
    synchronize: true,
    entities: [User]
  }),
    UserModule],
})

export class AppModule { }