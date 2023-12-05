import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoDto } from './create-evento.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventoDto extends PartialType(CreateEventoDto) {
    @ApiProperty({
        example: 'Vacinação de cães e gatos',
        required: false,
    })
    @IsString()
    @IsOptional()
    titulo: string;

    @ApiProperty({
        example: 'Um dia para vacinar cães e gatos contra a raiva',
        required: false,
    })
    @IsString()
    @IsOptional()
    descricao: string;

    @ApiProperty({
        example: 'Saúde',
        required: false,
    })
    @IsString()
    @IsOptional()
    categoria: string;

    @IsOptional()
    imagem_evento: Buffer[];
    
    @ApiProperty({
        example: '17/12/2023',
        required: false,
    })
    @IsDate()
    @IsOptional()
    data: Date;

    @ApiProperty({
        example: '09:00',
        required: true,
    })
    @IsString()
    @IsOptional()
    hora: string;
}
