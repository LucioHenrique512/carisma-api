import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { LessonsModule } from './lessons/lessons.module';
import environments from './config/environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environments],
      isGlobal: true,
      expandVariables: true,
    }),
    UsersModule,
    DatabaseModule,
    LessonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
