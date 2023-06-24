import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/api/user/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto, LoginDto } from './auth.dto';
import { AuthHelper } from './auth.helper';
import { Role } from '@/api/role/entities/role.entity';
import { RoleUser } from '@/api/roleuser/entities/roleuser.entity';

@Injectable()
export class AuthService {
  @InjectRepository(User)
  @InjectRepository(Role)
  private readonly repository: Repository<User>;
  // private readonly roleRepository: Repository<Role>;

  @Inject(AuthHelper)
  private readonly helper: AuthHelper;

  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(RoleUser)
    private readonly roleuserRepository: Repository<RoleUser>,
  ) {}

  public async register(body: RegisterDto): Promise<any | never> {
    const {
      name,
      email,
      avatar,
      gender,
      status,
      phone,
      password,
    }: RegisterDto = body;

    let user: User = await this.repository.findOne({ where: { email: email } });
    const rl: Role = await this.roleRepository.findOne({
      where: { name: 'User' },
    });

    if (user) {
      throw new HttpException('Conflict of duplicates', HttpStatus.CONFLICT);
    }

    user = new User();

    console.log(rl.name);

    user.name = name;
    user.email = email;
    user.gender = gender;
    user.avatar = avatar;
    user.status = status;
    user.phone = phone;
    user.password = this.helper.encodePassword(password);
    await this.repository.save(user);

    const roleuser = new RoleUser();

    roleuser.user = user;
    roleuser.role = rl;

    await this.roleuserRepository.save(roleuser);
    await this.roleuserRepository.save(roleuser);

    return user;
  }

  public async login(body: LoginDto): Promise<any | never> {
    const { email, password }: LoginDto = body;
    const user: User = await this.repository.findOne({ where: { email } });

    if (!user) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid: boolean = this.helper.isPasswordValid(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }

    this.repository.update(user.id, { lastLoginAt: new Date() });

    return { user: user, token: this.helper.generateToken(user) };
  }

  public async refresh(user: User): Promise<string> {
    this.repository.update(user.id, { lastLoginAt: new Date() });

    return this.helper.generateToken(user);
  }
}
