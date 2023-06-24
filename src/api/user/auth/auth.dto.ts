import { Trim } from 'class-sanitizer';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @Trim()
  @IsEmail()
  public readonly email: string;

  @IsString()
  @MinLength(8)
  public readonly password: string;

  @IsString()
  @IsOptional()
  public readonly name?: string;

  @IsString()
  @IsOptional()
  public readonly gender?: string;

  @IsString()
  @IsOptional()
  public readonly avatar?: string;

  @IsString()
  @IsOptional()
  public readonly phone?: string;

  @IsBoolean()
  @IsOptional()
  public readonly status?: boolean;
}

export class LoginDto {
  @Trim()
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}
