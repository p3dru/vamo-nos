import { PartialType } from '@nestjs/mapped-types';
import { UsuarioDto } from './create-usuario.dto';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(UsuarioDto) {
    @IsOptional()
    @IsString()
    nome?: string;

    @IsOptional()
    @IsString()
    email?: string;

    @IsOptional()
    @IsString()
    senha?: string;

    @IsOptional()
    imagem_perfil?: Buffer;
}
