import { Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { LessonsRepository } from './lesson.repository';

@Injectable()
export class LessonsService {
  constructor(protected readonly lessonsRepository: LessonsRepository) {}

  async create(createLessonDto: CreateLessonDto) {
    await this.lessonsRepository.create(createLessonDto);
    return;
  }

  // findAll() {
  //   return `This action returns all lessons`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} lesson`;
  // }

  // update(id: number, updateLessonDto: UpdateLessonDto) {
  //   return `This action updates a #${id} lesson`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} lesson`;
  // }
}
