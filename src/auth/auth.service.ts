import { Inject, Injectable, UnauthorizedException} from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { OrganizadoresService } from '../organizadores/organizadores.service';
import { AdministradoresService } from '../administradores/administradores.service';


async function compararSenha(inputSenha, senhaArmazenada){
    const isMatch = await bcrypt.compare(inputSenha, senhaArmazenada);
    return isMatch;
}

@Injectable()
export class AuthService {
    constructor(
        private usuariosService: UsuariosService,
        private organizadoresService: OrganizadoresService,
        private administradoresService: AdministradoresService,
        @Inject('JwtParticipantesService') private jwtServiceParticipantes: JwtService,
        @Inject('JwtOrganizadoresService') private jwtServiceOrganizadores: JwtService,
        @Inject('JwtAdministradoresService') private jwtServiceAdministradores: JwtService
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
        const accessToken = await this.jwtServiceParticipantes.signAsync(payload);
        console.log(accessToken);

        return {
            access_token: accessToken,
        };
    }

    async signInOrganizadores(email: string, senhaInput: string): Promise<any>{
        const organizador = await this.organizadoresService.buscarEspecificoPorEmail(email);

        if(organizador){
            console.log('Chegou a encontrar o organizador');
            const isSenhaMatch = await compararSenha(senhaInput, organizador.senha)
            
            if (!isSenhaMatch){
                //console.log(usuario.email, usuario.senha)
                throw new UnauthorizedException();
            }
        }

        const payload = {sub: organizador.id, email: organizador.email, nome: organizador.nome};
        const accessToken = await this.jwtServiceOrganizadores.signAsync(payload);
        console.log(accessToken);

        return {
            access_token: accessToken,
        };
    }

    async signInAdministradores(email: string, senhaInput: string): Promise<any>{
        const administrador = await this.administradoresService.buscarEspecificoPorEmail(email);

        if(administrador){
            console.log('Chegou a encontrar o administrador');
            const isSenhaMatch = await compararSenha(senhaInput, administrador.senha)
            
            if (!isSenhaMatch){
                //console.log(usuario.email, usuario.senha)
                throw new UnauthorizedException();
            }
        }

        const payload = {sub: administrador.id, email: administrador.email, nome: administrador.nome};
        const accessToken = await this.jwtServiceAdministradores.signAsync(payload);
        console.log(accessToken);

        return {
            access_token: accessToken,
        };
    }

}
