import { Rol } from './../../rol/entities/rol.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
    IsArray,
    IsDate,
    IsEmail,
    IsNumber,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUsuarioDto {

    @IsString()
    first_name: string;

    @IsString()
    username: string;

    @IsString()
    last_name: string;

    @IsString()
    email: string;

    @IsDate()
    birth_date: Date;

    @IsString()
    password: string;

    @IsNumber()
    rol_id: number;
}
