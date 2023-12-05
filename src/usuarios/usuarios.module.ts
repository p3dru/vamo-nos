import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { JwtAdministradoresModule } from '../auth/jwtAdministradores.module';
import { JwtParticipantesModule } from '../auth/jwtParticipantes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), JwtAdministradoresModule, JwtParticipantesModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}
