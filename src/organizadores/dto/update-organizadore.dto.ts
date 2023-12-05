import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganizadorDto } from './create-organizadore.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrganizadorDto extends PartialType(CreateOrganizadorDto) {
    @ApiProperty({
        example: 'John Doe',
        required: false,
    })
    @IsOptional()
    @IsString()
    nome?: string;

    @ApiProperty({
        example: 'johndoe@gmailx.com',
        required: false,
    })
    @IsOptional()
    @IsString()
    email?: string;

    @ApiProperty({
        example: 'kcnsjncs&¨%¨13083',
        required: false,
    })
    @IsOptional()
    @IsString()
    senha?: string;

    @IsOptional()
    imagem_perfil?: Buffer;
}
