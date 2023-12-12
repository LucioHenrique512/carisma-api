import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty()
  @Prop()
  fullName: string;
  @IsString()
  @ApiProperty()
  @Prop()
  email: string;
  @IsString()
  @ApiProperty()
  @Prop()
  birthDate: string;
  @IsString()
  @ApiProperty()
  @Prop()
  phoneNumber: string;
  @IsString()
  @ApiProperty()
  @Prop()
  registrationNumber: string;
  @IsString()
  @Prop()
  @ApiProperty()
  cpf: string;
}
