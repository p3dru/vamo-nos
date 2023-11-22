import { PartialType } from '@nestjs/mapped-types';
import { AdministradorDto } from './create-administrador.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAdministradorDto extends PartialType(AdministradorDto) {
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
