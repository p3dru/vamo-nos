import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganizadorDto } from './create-organizadore.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateOrganizadorDto extends PartialType(CreateOrganizadorDto) {
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
