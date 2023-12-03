import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login-participantes')
    signInParticipantes(@Body() signInParticipantesDto: Record<string, any>): Promise<any> {
        return this.authService.signInParticipantes(signInParticipantesDto.email, signInParticipantesDto.senha);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user;
    }
}