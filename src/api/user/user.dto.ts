import { IsOptional, IsString } from 'class-validator';

export class UpdateNameDto {
  @IsString()
  @IsOptional()
  public readonly name?: string;
  public readonly email?: string;
  public readonly avatar?: string;
  public readonly phone?: string;
  public readonly status?: boolean;
  public readonly gender?: string;
  public readonly password?: string;
}
