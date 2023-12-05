import { Module } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { AdministradoresController } from './administradores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrador } from './entities/administrador.entity';
import { JwtAdministradoresModule } from '../auth/jwtAdministradores.module';

@Module({
  imports: [TypeOrmModule.forFeature([Administrador]), JwtAdministradoresModule],
  controllers: [AdministradoresController],
  providers: [AdministradoresService],
  exports: [AdministradoresService],
})
export class AdministradoresModule {}
