import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private usersSchemaModel: Model<User>) {}

  create(data: User) {
    console.log('Repository', data);

    const createUser = new this.usersSchemaModel(data);
    return createUser.save();
  }
}
