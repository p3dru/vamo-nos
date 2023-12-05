import { PartialType } from '@nestjs/mapped-types';
import { AdministradorDto } from './create-administrador.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdministradorDto extends PartialType(AdministradorDto) {
    @ApiProperty({
        example: 'José Wilker',
        required: false,
    })
    @IsOptional()
    @IsString()
    nome?: string;

    @ApiProperty({
        example: 'administrador1324@gmailx.com',
        required: false,
    })
    @IsOptional()
    @IsString()
    email?: string;

    @ApiProperty({
        example: 'mchayus**(w23q(*',
        required: false,
    })
    @IsOptional()
    @IsString()
    senha?: string;

    @IsOptional()
    imagem_perfil?: Buffer;
}
