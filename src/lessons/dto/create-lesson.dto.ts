import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsObject, IsString, Min } from 'class-validator';

export class ExamDto {
  @Prop()
  @IsString()
  @ApiProperty()
  title: string;
  @Prop()
  @IsString()
  @ApiProperty()
  link: string;
}

export class CreateLessonDto {
  @IsString()
  @ApiProperty()
  title: string;
  @IsString()
  @ApiProperty()
  description: string;
  @IsString()
  @ApiProperty()
  teacherName: string;
  @IsString()
  @ApiProperty()
  content: string;
  @IsArray()
  @ApiProperty({ type: [ExamDto] })
  exams: Array<ExamDto>;
}
