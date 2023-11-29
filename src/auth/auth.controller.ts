import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login-participantes')
    signInParticipantes(@Body() signInParticipantesDto: Record<string, any>){
        return this.authService.signInParticipantes(signInParticipantesDto.email, signInParticipantesDto.senha);
    }
}