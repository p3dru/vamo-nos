import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdministradoresGuard, AuthGuard, OrganizadoresGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login-participantes')
    signInParticipantes(@Body() signInParticipantesDto: Record<string, any>): Promise<any> {
        return this.authService.signInParticipantes(signInParticipantesDto.email, signInParticipantesDto.senha);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login-organizadores')
    signInOrganizadores(@Body() signInOrganizadoresDto: Record<string, any>): Promise<any> {
        return this.authService.signInOrganizadores(signInOrganizadoresDto.email, signInOrganizadoresDto.senha);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login-administradores')
    signInAdministradores(@Body() signInAdministradores: Record<string, any>): Promise<any>{
        return this.authService.signInAdministradores(signInAdministradores.email, signInAdministradores.senha);
    }

    
    @Get('profile')
    @UseGuards(AuthGuard)
    getProfile(@Request() req){
        console.log('Auth Guard -> Participante: ', req.user);
        return req.user;
    }

    @Get('organizador')
    @UseGuards(OrganizadoresGuard)
    getOrganizador(@Request() req){
        console.log('Auth Guard -> Organizador: ', req.organizador);
        return req.organizador;
    }
   
    @Get('administrador')
    @UseGuards(AdministradoresGuard)
    getAdministrador(@Request() req){
        console.log('Auth Guard -> Administrador: ');
        return req.administrador;
    }


}