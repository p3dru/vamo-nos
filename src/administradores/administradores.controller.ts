import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { AdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';

@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly administradoresService: AdministradoresService) {}

  @Post()
  criarUsuario(@Body() administradorDto: AdministradorDto) {
    return this.administradoresService.criarAdministrador(administradorDto);
  }

  @Patch(':id')
  atualizarAdministrador(@Param('id') id: string, @Body() updateAdministradorDto: UpdateAdministradorDto) {
    return this.administradoresService.atualizarAdministrador(+id, updateAdministradorDto);
  }

  @Get()
  buscarTodos() {
    return this.administradoresService.buscarTodos();
  }

  @Get(':id')
  buscarEspecifico(@Param('id') id: string) {
    return this.administradoresService.buscarEspecifico(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradoresService.excluirAdministrador(+id);
  }
}
