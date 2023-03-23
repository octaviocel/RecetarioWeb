import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { CreateRoleDto } from 'src/app/roles/dto/create-role.dto';

export class CreateUserDto {
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
