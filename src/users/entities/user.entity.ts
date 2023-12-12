import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  fullName: string;
  @Prop()
  email: string;
  @Prop()
  birthDate: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  registrationNumber: string;
  @Prop()
  cpf: string;
}

export const UserSchma = SchemaFactory.createForClass(User);
