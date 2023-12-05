import { Module } from '@nestjs/common';
import { OrganizadoresService } from './organizadores.service';
import { OrganizadoresController } from './organizadores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizador } from './entities/organizador.entity';
import { JwtOrganizadoresModule } from '../auth/jwtOrganizadores.module';
import { JwtAdministradoresModule } from '../auth/jwtAdministradores.module';

@Module({
  imports: [TypeOrmModule.forFeature([Organizador]), JwtOrganizadoresModule, JwtAdministradoresModule],
  controllers: [OrganizadoresController],
  providers: [OrganizadoresService],
  exports: [OrganizadoresService],
})
export class OrganizadoresModule {}
