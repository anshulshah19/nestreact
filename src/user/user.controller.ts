import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Query, Put, Delete } from '@nestjs/common';
import {UserService} from './user.service';
import {UserDTO} from './dto/user.dto';
import * as bcrypt from 'bcryptjs';


@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/register')
    async register(@Res() res, @Body() UserDTO: UserDTO) {
        const newUser = await this.userService.registerUser(UserDTO);
        if(newUser == null){
            //throw new HttpException('user already exsists', HttpStatus.BAD_REQUEST);
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: "User Already Exist!",
                post: newUser
            })
        }
        else{
            return res.status(HttpStatus.OK).json({
                message: "User registered successfully!",
                post: newUser
            })    
        }        
    }
}
