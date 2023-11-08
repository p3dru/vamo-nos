import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
    @IsString()
    @IsOptional()
    titulo: string;

    @IsString()
    @IsOptional()
    descricao: string;

    @IsString()
    @IsOptional()
    categoria: string;

    @IsOptional()
    imagem_evento: Buffer[];
    
    @IsDate()
    @IsOptional()
    data: Date;

    @IsString()
    @IsOptional()
    hora: string;
}
