import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { OrganizadoresModule } from '../organizadores/organizadores.module';
import { JwtOrganizadoresModule } from './jwtOrganizadores.module';
import { JwtParticipantesModule } from './jwtParticipantes.module';
import { JwtAdministradoresModule } from './jwtAdministradores.module';
import { AdministradoresModule } from '../administradores/administradores.module';
import { OrganizadoresAdministradoresGuard, OrganizadoresGuard } from './auth.guard';


@Module({
  imports: [UsuariosModule, OrganizadoresModule, AdministradoresModule, JwtParticipantesModule, JwtOrganizadoresModule, JwtAdministradoresModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
