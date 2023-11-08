import { IsDate, IsNotEmpty, IsOptional, IsString, } from "class-validator";

export class CreateEventoDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsOptional()
    descricao: string;

    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsOptional()
    imagem_evento: Buffer[];
    
    @IsDate()
    @IsNotEmpty()
    data: Date;

    @IsString()
    @IsNotEmpty()
    hora: string;
}
