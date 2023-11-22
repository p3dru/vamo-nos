import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AdministradorDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsOptional()
    imagem_perfil: Buffer;
}
