import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson } from './entities/lesson.entity';
import { Model } from 'mongoose';

@Injectable()
export class LessonsRepository {
  constructor(
    @InjectModel(Lesson.name) private lessonSchemaModel: Model<Lesson>,
  ) {}

  create(data: Lesson) {
    const createLesson = new this.lessonSchemaModel(data);
    return createLesson.save();
  }
}
