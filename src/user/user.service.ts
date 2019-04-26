import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDTO } from './dto/user.dto';
import { user } from './interfaces/user.interface';
import { userSchema } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
    constructor(@InjectModel('user') private readonly userModel: Model<user>) { }

    async registerUser(UserDTO: UserDTO): Promise<user> {
        let users = await this.userModel.findOne({ userName: UserDTO.userName }).exec();
        if(users){
            users = null;
        }
        else{
            UserDTO.password = await bcrypt.hash(UserDTO.password, 10);
            users = await new this.userModel(UserDTO);
             users.save();
        }
        return users;
    }
}
