import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { AdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { AdministradoresGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly administradoresService: AdministradoresService) {}

  @Post()
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  criarUsuario(@Body() administradorDto: AdministradorDto) {
    return this.administradoresService.criarAdministrador(administradorDto);
  }

  @Patch(':id')
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  atualizarAdministrador(@Param('id') id: string, @Body() updateAdministradorDto: UpdateAdministradorDto) {
    return this.administradoresService.atualizarAdministrador(+id, updateAdministradorDto);
  }

  @Get()
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  buscarTodos() {
    return this.administradoresService.buscarTodos();
  }

  @Get(':id')
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  buscarEspecifico(@Param('id') id: string) {
    return this.administradoresService.buscarEspecifico(+id);
  }

  @Delete(':id')
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  remove(@Param('id') id: string) {
    return this.administradoresService.excluirAdministrador(+id);
  }
}
