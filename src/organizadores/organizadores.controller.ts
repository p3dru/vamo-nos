import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrganizadoresService } from './organizadores.service';
import { CreateOrganizadorDto } from './dto/create-organizadore.dto';
import { UpdateOrganizadorDto } from './dto/update-organizadore.dto';

@Controller('organizadores')
export class OrganizadoresController {
  constructor(private readonly organizadoresService: OrganizadoresService) {}

  @Post()
  criarUsuarioOrganizador(@Body() createOrganizadoreDto: CreateOrganizadorDto) {
    return this.organizadoresService.criarUsuarioOrganizador(createOrganizadoreDto);
  }

  @Get()
  buscarTodos() {
    return this.organizadoresService.buscarTodos();
  }

  @Get(':id')
  buscarEspecifico(@Param('id') id: string) {
    return this.organizadoresService.buscarEspecifico(+id);
  }

  @Patch(':id')
  atualizarOrganizador(@Param('id') id: string, @Body() updateOrganizadoreDto: UpdateOrganizadorDto) {
    return this.organizadoresService.atualizarOrganizador(+id, updateOrganizadoreDto);
  }

  @Delete(':id')
  excluirOrganizador(@Param('id') id: string) {
    return this.organizadoresService.excluirOrganizador(+id);
  }
}
