import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsOptional, IsString, } from "class-validator";

export class CreateEventoDto {
    @ApiProperty({
        example: 'Vacinação de cães e gatos',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
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
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsOptional()
    imagem_evento: Buffer[];
    
    @ApiProperty({
        example: '17/12/2023',
        required: true,
    })
    @IsDate()
    @IsNotEmpty()
    data: Date;

    @ApiProperty({
        example: '09:00',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    hora: string;
}
