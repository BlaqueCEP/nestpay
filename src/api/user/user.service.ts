import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { UpdateNameDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public async updateName(body: UpdateNameDto, req: Request): Promise<User> {
    const user: User = <User>req.user;

    user.name = body.name;
    user.email = body.email;
    user.phone = body.phone;
    user.avatar = body.avatar;
    user.status = body.status;
    user.gender = body.gender;
    user.password = body.password;

    return this.repository.save(user);
  }
}
