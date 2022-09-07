import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module'
import { User } from './entities/user.entity';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
  host:"34.64.143.187",
    port: 5432,
    username: 'postgres',
    password: 'cocobin',
    database: 'neststudy',
    synchronize: true,
    entities: [User],
  }),
    UserModule],
})

export class AppModule { }