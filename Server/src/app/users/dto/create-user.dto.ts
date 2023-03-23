import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { CreateRoleDto } from 'src/app/roles/dto/create-role.dto';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  birth_date: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Length(8)
  @IsString()
  @IsNotEmpty()
  password: string;

  refreshToken: string;
  role: CreateRoleDto;
}
