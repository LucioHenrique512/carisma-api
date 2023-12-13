import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';
import { ExamDto } from '../dto/create-lesson.dto';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ required: true, type: String })
  description: string;
  @Prop({ required: true, type: String })
  teacherName: string;
  @Prop({ required: true, type: String })
  content: string;
  @Prop({ required: true, type: Array<ExamDto> })
  exams: ExamDto[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
