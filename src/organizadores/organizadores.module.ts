import { Module } from '@nestjs/common';
import { OrganizadoresService } from './organizadores.service';
import { OrganizadoresController } from './organizadores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organizador } from './entities/organizadore.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organizador])],
  controllers: [OrganizadoresController],
  providers: [OrganizadoresService],
})
export class OrganizadoresModule {}
