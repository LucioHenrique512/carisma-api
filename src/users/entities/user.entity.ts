import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop({ required: true, type: String })
  fullName: string;
  @Prop({ unique: true, required: true, type: String })
  email: string;
  @Prop({ required: true, type: String })
  birthDate: string;
  @Prop({ required: true, type: String })
  phoneNumber: string;
  @Prop({ required: true, type: String })
  registrationNumber: string;
  @Prop({ unique: true, required: true, type: String })
  cpf: string;
}

export const UserSchma = SchemaFactory.createForClass(User);
