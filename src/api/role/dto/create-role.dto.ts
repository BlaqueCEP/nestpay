import { IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsOptional()
  public readonly name?: string;

  @IsString()
  @IsOptional()
  public readonly description?: string;
}
