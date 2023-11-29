import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';


async function compararSenha(inputSenha, senhaArmazenada){
    const isMatch = await bcrypt.compare(inputSenha, senhaArmazenada);
    return isMatch;
}

@Injectable()
export class AuthService {
    constructor(
        private usuariosService: UsuariosService,
        private jwtService: JwtService
        ){}

    async signInParticipantes(email: string, senhaInput: string): Promise<any>{
        const usuario = await this.usuariosService.buscarEspecificoPorEmail(email);

        //inserir o bcrypt agora para comparar a senha
        if(usuario){
            console.log('Chegou a encontrar o usuario');
            const isSenhaMatch = await compararSenha(senhaInput, usuario.senha);
            
            if (!isSenhaMatch){
                //console.log(usuario.email, usuario.senha)
                throw new UnauthorizedException();
            } 
        }


        /*
        if(usuario?.senha !== senhaInput){
            
        }
        */

        const payload = {sub: usuario.id, email: usuario.email, nome: usuario.nome};
        const accessToken = await this.jwtService.signAsync(payload);
        //console.log(accessToken)

        return {
            access_token: accessToken,
          };
    }
}
