import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from './entities/lesson.entity';
import { LessonsRepository } from './lesson.repository';

@Module({
  controllers: [LessonsController],
  providers: [LessonsRepository, LessonsService],
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
  ],
})
export class LessonsModule {}
