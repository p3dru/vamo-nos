import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrganizadoresService } from './organizadores.service';
import { CreateOrganizadorDto } from './dto/create-organizadore.dto';
import { UpdateOrganizadorDto } from './dto/update-organizadore.dto';
import { AdministradoresGuard, OrganizadoresGuard } from '../auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('organizadores')
export class OrganizadoresController {
  constructor(private readonly organizadoresService: OrganizadoresService) {}

  @Post()
  criarUsuarioOrganizador(@Body() createOrganizadoreDto: CreateOrganizadorDto) {
    return this.organizadoresService.criarUsuarioOrganizador(createOrganizadoreDto);
  }

  @Get()
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  buscarTodos() {
    return this.organizadoresService.buscarTodos();
  }

  @Get(':id')
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  buscarEspecifico(@Param('id') id: string) {
    return this.organizadoresService.buscarEspecifico(+id);
  }

  @Patch(':id')
  @ApiTags('Usuários Organizadores')
  @ApiTags('Administradores')
  @UseGuards(OrganizadoresGuard)
  @UseGuards(AdministradoresGuard)
  atualizarOrganizador(@Param('id') id: string, @Body() updateOrganizadoreDto: UpdateOrganizadorDto) {
    return this.organizadoresService.atualizarOrganizador(+id, updateOrganizadoreDto);
  }

  @Delete(':id')
  @ApiTags('Administradores')
  @UseGuards(AdministradoresGuard)
  excluirOrganizador(@Param('id') id: string) {
    return this.organizadoresService.excluirOrganizador(+id);
  }
}
