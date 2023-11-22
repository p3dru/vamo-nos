import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventosModule } from './eventos/eventos.module';
import { OrganizadoresModule } from './organizadores/organizadores.module';
import { AdministradoresModule } from './administradores/administradores.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'bd_!s_for_d4t4',
      database: 'vamo-nos',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(), UsuariosModule, EventosModule, OrganizadoresModule, AdministradoresModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
