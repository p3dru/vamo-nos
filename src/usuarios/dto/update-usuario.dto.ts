import { PartialType } from '@nestjs/mapped-types';
import { UsuarioDto } from './create-usuario.dto';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsuarioDto extends PartialType(UsuarioDto) {
    @ApiProperty({
        example: 'Mary Ann',
        required: false,
    })
    @IsOptional()
    @IsString()
    nome?: string;

    @ApiProperty({
        example: 'maryannx32@gmailx.com',
        required: false,
    })
    @IsOptional()
    @IsString()
    email?: string;

    @ApiProperty({
        example: 'cnjsnc&¨¨93',
        required: false,
    })
    @IsOptional()
    @IsString()
    senha?: string;

    @IsOptional()
    imagem_perfil?: Buffer;
}
