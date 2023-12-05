import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UsuarioDto {
    @ApiProperty({
        example: 'Mary Ann',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({
        example: 'maryannx32@gmailx.com',
        required: true,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example: 'cnjsnc&¨¨93',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    senha: string

    @IsOptional()
    imagem_perfil: Buffer;
}
