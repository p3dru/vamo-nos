import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateOrganizadorDto {
    @ApiProperty({
        example: 'John Doe',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({
        example: 'johndoe@gmailx.com',
        required: true,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example: 'kcnsjncs&¨%¨13083',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    senha: string

    @IsOptional()
    imagem_perfil: Buffer;
}
