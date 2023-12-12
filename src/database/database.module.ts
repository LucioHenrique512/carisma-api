import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import environments from 'src/config/environments';

@Module({
  imports: [ConfigModule, MongooseModule.forRoot('env.dbUrl')],
})
export class DatabaseModule {}
