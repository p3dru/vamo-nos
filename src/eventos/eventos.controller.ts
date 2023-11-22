import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  //Gets
  @Get()
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
  async criarEvento(@Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.criarEvento(createEventoDto);
  }

  //Patch
  @Patch(':id')
  async atualizarEvento(@Param('id') id: string, @Body() updateEventoDto: UpdateEventoDto) {
    return this.eventosService.atualizarEvento(+id, updateEventoDto);
  }

  //Delete
  @Delete(':id')
  async excluirEvento(@Param('id') id: string) {
    return this.eventosService.excluirEvento(+id);
  }
}
