import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { Evento } from './entities/evento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtOrganizadoresModule } from '../auth/jwtOrganizadores.module';
import { JwtParticipantesModule } from '../auth/jwtParticipantes.module';
import { JwtAdministradoresModule } from '../auth/jwtAdministradores.module';
import { OrganizadoresAdministradoresGuard, OrganizadoresGuard, AdministradoresGuard, AuthGuard, AnyGuard } from '../auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Evento]), JwtOrganizadoresModule, JwtParticipantesModule, JwtAdministradoresModule],
  controllers: [EventosController],
  providers: [EventosService, OrganizadoresGuard, AdministradoresGuard, OrganizadoresAdministradoresGuard, AuthGuard, AnyGuard],
})
export class EventosModule {}
