import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import environments from 'src/config/environments';

const env = environments();

@Module({
  imports: [MongooseModule.forRoot(env.dbUrl)],
})
export class DatabaseModule {}
