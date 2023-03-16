import { ApiProperty } from '@nestjs/swagger';
import {
    IsArray,
    IsEmail,
    IsNumber,
    IsString,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateRolDto {


    @IsString()
    name: string;

    @IsString()
    description: string;
}
