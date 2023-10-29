import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async criarUsuario(@Body() usuarioDto: UsuarioDto) {
    return this.usuariosService.criarUsuario(usuarioDto);
  }

  @Patch(':id')
  async atualizarUsuario(@Param(':id') id: number, @Body() usuarioDto: UsuarioDto){
    return this.usuariosService.atualizarUsuario(id, usuarioDto);
  }

  @Get()
  buscarTodos() {
    return this.usuariosService.buscarTodos();
  }

  @Get(':id')
  buscarEspecifico(@Param('id') id: string) {
    return this.usuariosService.buscarEspecifico(+id);
  }

  /*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }
*/

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.excluirUsuario(+id);
  }
}
