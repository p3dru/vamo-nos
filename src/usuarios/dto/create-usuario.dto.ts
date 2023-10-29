import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UsuarioDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string

    @IsOptional()
    imagem_perfil: Buffer;

    @IsString()
    @IsNotEmpty()
    tipo: string;
}
