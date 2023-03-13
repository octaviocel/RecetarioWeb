import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './utils/logger.meddleware';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolModule } from './rol/rol.module';
import { UsuarioModule } from './usuario/usuario.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: process.env.DB_SYNC === 'true' ? true : false,
    dropSchema: process.env.DB_SYNC === 'true' ? true : false,
    logging: ['error']
  }),
    RolModule,
    UsuarioModule,
    S3Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
