import { CanActivate, ExecutionContext, Inject, Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { JsonWebTokenError, JwtService, TokenExpiredError } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { Request } from "express";
import { Reflector } from "@nestjs/core";
import { JwtOrganizadoresModule } from "./jwtOrganizadores.module";


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(@Inject('JwtParticipantesService') private jwtService: JwtService){}

    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        //console.log(request);
        const token = this.extractTokenFromHeader(request);
        if(!token){
            console.log("Token não encontrado")
            throw new UnauthorizedException();
        }

        try{
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: jwtConstants.secret
                }
            );
            request['user'] = payload;
        } catch {
            console.log("Token não autorizado")
            throw new UnauthorizedException();
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}


@Injectable()
export class OrganizadoresGuard implements CanActivate{
    constructor(@Inject('JwtOrganizadoresService') private jwtService: JwtService){}
    
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        //console.log(request, 'ANTES DO TOKEN');
        const token = this.extractTokenFromHeader(request);
        if(!token){
            console.log('Token não encontrado');
            throw new UnauthorizedException();
        }

        try{
            console.log('Cheguei no try');
            const payload = await this.jwtService.verifyAsync(
                token,
                {
                    secret: jwtConstants.secondSecret
                }
            );
            console.log(payload);
            request['organizador'] = payload;
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                console.log("Token expirado");
                throw new UnauthorizedException('Token expirado');
            } else if (error instanceof JsonWebTokenError) {
                console.log("Token inválido");
                throw new UnauthorizedException('Token inválido Organizador');
            } else {
                console.log("Erro desconhecido");
                throw new InternalServerErrorException('Erro desconhecido');
            }
        }

        return true;
    }


    private extractTokenFromHeader(request: Request): string | undefined {
        //console.log(request.headers.authorization);
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        //console.log(type, token);
        return type === 'Bearer' ? token : undefined;
    }
}

@Injectable()
export class AdministradoresGuard implements CanActivate{
   constructor(@Inject('JwtAdministradoresService') private jwtService: JwtService){}
   
   async canActivate(context: ExecutionContext): Promise<boolean> {
       const request = context.switchToHttp().getRequest();
       const token = this.extractTokenFromHeader(request);
       if(!token){
           console.log('Token não encontrado');
           throw new UnauthorizedException();
       }

       try{
           console.log('Cheguei no try');
           const payload = await this.jwtService.verifyAsync(
               token,
               {
                  secret: jwtConstants.thirdSecret
               }
           );
           console.log(payload);
           request['administrador'] = payload;
       } catch (error) {
           if (error instanceof TokenExpiredError) {
               console.log("Token expirado Administrado");
               throw new UnauthorizedException('Token expirado');
           } else if (error instanceof JsonWebTokenError) {
               console.log("Token inválido Administrado");
               throw new UnauthorizedException('Token inválido Administrador');
           } else {
               console.log("Erro desconhecido");
               throw new InternalServerErrorException('Erro desconhecido');
           }
       }

       return true;
   }

   private extractTokenFromHeader(request: Request): string | undefined {
       const [type, token] = request.headers.authorization?.split(' ') ?? [];
       return type === 'Bearer' ? token : undefined;
   }
}

@Injectable()
export class AnyGuard implements CanActivate{
    constructor(
        private reflector: Reflector,
        @Inject('JwtParticipantesService') private jwtParticipantesService: JwtService,
        @Inject('JwtOrganizadoresService') private jwtOrganizadoresService: JwtService,
        @Inject('JwtAdministradoresService') private jwtAdministradoresService: JwtService
    ) {}

    canActivate(context: ExecutionContext): boolean {
        const guards = this.reflector.get<any[]>('guards', context.getHandler());
        const authGuard = new AuthGuard(this.jwtParticipantesService);
        const organizadoresGuard = new OrganizadoresGuard(this.jwtOrganizadoresService);
        const administradoresGuard = new AdministradoresGuard(this.jwtAdministradoresService);
        return guards.some(guard => {
            try {
                if (guard === OrganizadoresGuard) {
                    return organizadoresGuard.canActivate(context);
                } else if (guard === AdministradoresGuard) {
                    return administradoresGuard.canActivate(context);
                } else if (guard === AuthGuard){
                    return authGuard.canActivate(context);
                }
            } catch (error) {
                console.error('Erro: ', error);
                return false;
            }
        });
     }
    
}

@Injectable()
export class OrganizadoresAdministradoresGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        @Inject('JwtOrganizadoresService') private jwtOrganizadoresService: JwtService,
        @Inject('JwtAdministradoresService') private jwtAdministradoresService: JwtService
    ) {}
   
    canActivate(context: ExecutionContext): boolean {
        const guards = this.reflector.get<any[]>('guards', context.getHandler());
        const organizadoresGuard = new OrganizadoresGuard(this.jwtOrganizadoresService);
        const administradoresGuard = new AdministradoresGuard(this.jwtAdministradoresService);
        return guards.some(guard => {
            try {
                if (guard === OrganizadoresGuard) {
                    return organizadoresGuard.canActivate(context);
                } else if (guard === AdministradoresGuard) {
                    return administradoresGuard.canActivate(context);
                }
            } catch(error){
                console.error('Erro: ', error);
                return false;
            }
            
        });
    }
} 