import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AdministradorDto {
    @ApiProperty({
        example: 'José Wilker',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({
        example: 'administrador1324@gmailx.com',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example: 'mchayus**(w23q(*',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsOptional()
    imagem_perfil: Buffer;


}
