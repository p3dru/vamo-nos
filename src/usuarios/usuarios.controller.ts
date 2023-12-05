import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AdministradoresGuard, AuthGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async criarUsuario(@Body() usuarioDto: UsuarioDto) {
    return await this.usuariosService.criarUsuario(usuarioDto);
  }

  @Patch(':id')
  @ApiTags('Usuários Participantes')
  @ApiTags('Administradores')
  @UseGuards(AuthGuard)
  @UseGuards(AdministradoresGuard)
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.atualizarUsuario(+id, updateUsuarioDto);
  }

  @Get()
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  buscarTodos() {
    return this.usuariosService.buscarTodos();
  }

  @Get(':id')
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  buscarEspecifico(@Param('id') id: string) {
    return this.usuariosService.buscarEspecifico(+id);
  }

  /*
  @Get(':email')
  buscarEspecificoPorEmail(@Param('email') email: string){
    return this.usuariosService.buscarEspecificoPorEmail(email);
  }
  */

  @Delete(':id')
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  remove(@Param('id') id: string) {
    return this.usuariosService.excluirUsuario(+id);
  }
}
