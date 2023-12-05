import { Controller, Get, UseGuards, Post, Body, Patch, Param, Delete, Query, SetMetadata } from '@nestjs/common';
import { AdministradoresGuard, AuthGuard, OrganizadoresGuard, OrganizadoresAdministradoresGuard, AnyGuard } from '../auth/auth.guard';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  //Gets
  @Get()
  @ApiTags('Usuários Participantes')
  @ApiTags('Usuários Organizadores')
  @ApiTags('Administradores')
  /*@UseGuards(AuthGuard)
  @UseGuards(OrganizadoresGuard)
  @UseGuards(AdministradoresGuard)*/
  @UseGuards(AnyGuard)
  @SetMetadata('guards', [AdministradoresGuard, OrganizadoresGuard, AuthGuard])
  async buscarTodosMaisFiltros(
    @Query('titulo') titulo: string,
    @Query('descricao') descricao: string,
    @Query('categoria') categoria: string,
    @Query('ativo') ativo: string,
    @Query('order') order: "ASC",
  ) {
    const eventos = await this.eventosService.buscarTodosComFiltros(titulo, descricao, categoria, ativo, order);
    return eventos;
  }

  @Get(':id')
  @ApiTags('Usuários Participantes')
  @ApiTags('Usuários Organizadores')
  @ApiTags('Administradores')
  /*@UseGuards(AuthGuard)
  @UseGuards(OrganizadoresGuard)
  @UseGuards(AdministradoresGuard)*/
  @UseGuards(AnyGuard)
  @SetMetadata('guards', [AdministradoresGuard, OrganizadoresGuard, AuthGuard])
  async buscarEspecifico(@Param('id') id: string) {
    return this.eventosService.buscarEspecifico(+id);
  }

  /*
  @Get()
  async buscarPorFiltros(
    @Query('titulo') titulo: string,
    @Query('descricao') descricao: string,
    @Query('categoria') categoria: string,
    ){
    const eventos = await this.eventosService.buscarPorFiltros(titulo, descricao, categoria);
    return eventos;
  }
  */

  //Post
  @Post()
  @ApiTags('Usuários Organizadores')
  @ApiTags('Administradores')
  /*@UseGuards(OrganizadoresGuard)
  @UseGuards(AdministradoresGuard)*/
  @UseGuards(OrganizadoresAdministradoresGuard)
  @SetMetadata('guards', [OrganizadoresGuard, AdministradoresGuard])
  async criarEvento(@Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.criarEvento(createEventoDto);
  }

  //Patch
  @Patch(':id')
  @ApiTags('Usuários Organizadores')
  @ApiTags('Administradores')
  @UseGuards(OrganizadoresAdministradoresGuard)
  @SetMetadata('guards', [OrganizadoresGuard, AdministradoresGuard])
  /*@UseGuards(OrganizadoresGuard)
  @UseGuards(AdministradoresGuard)*/
  async atualizarEvento(@Param('id') id: string, @Body() updateEventoDto: UpdateEventoDto) {
    return this.eventosService.atualizarEvento(+id, updateEventoDto);
  }

  //Delete
  @Delete(':id')
  @ApiTags('Usuários Organizadores')
  @ApiTags('Administradores')
  /*@UseGuards(OrganizadoresGuard)
  @UseGuards(AdministradoresGuard)*/
  @UseGuards(OrganizadoresAdministradoresGuard)
  @SetMetadata('guards', [OrganizadoresGuard, AdministradoresGuard])
  async excluirEvento(@Param('id') id: string) {
    return this.eventosService.excluirEvento(+id);
  }
}
