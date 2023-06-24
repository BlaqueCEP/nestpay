import { IsOptional, IsString } from 'class-validator';

export class CreatePermissionDto {
  @IsString()
  @IsOptional()
  public readonly name?: string;

  @IsString()
  @IsOptional()
  public readonly description?: string;
}
