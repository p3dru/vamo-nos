import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
import { Repository } from 'typeorm';


//FALTA INJETAR REPOSITÓRIO, E SEGUIR O MODELO DE USUÁRIOS
//ALTERAR OS CAMPOS PARA FAZER AS LISTAS DE PARTICIPANTES E AFINS

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>
  ){}

  //Gets
  /*
  async buscarTodos(): Promise<Evento[]> {
    return await this.eventoRepository.find({
      order: {id: "ASC"},
    });
  }
  */

  async buscarEspecifico(id: number): Promise<Evento> {
    const evento = await this.eventoRepository.findOneBy({id});
    if (!evento){
      throw new NotFoundException('Evento não encontrado');
    }
    return evento;
  }

  async buscarTodosComFiltros(
    titulo: string,
    descricao: string,
    categoria: string,
    order: 'ASC',
    ): Promise<Evento[]>{
    const query = this.eventoRepository.createQueryBuilder('evento');

    if (titulo){
      query.andWhere('unaccent(evento.titulo) ilike unaccent(:titulo)', {titulo: `%${titulo}%`});
    }

    if (descricao){
      query.andWhere('unaccent(evento.descricao) ilike unaccent(:descricao)', {descricao: `%${descricao}%`});
    }

    if (categoria){
      query.andWhere('unaccent(evento.categoria) ilike unaccent(:categoria)', {categoria: `%${categoria}%`});
    }

    return await query.getMany();
  }

  //Post
  async criarEvento(createEventoDto: CreateEventoDto) {
    const novoEvento = this.eventoRepository.create(createEventoDto);
    return await this.eventoRepository.save(novoEvento);
  }

  //Patch
  async atualizarEvento(id: number, updateEventoDto: UpdateEventoDto) {
    const evento = await this.buscarEspecifico(id);
    Object.assign(evento, updateEventoDto);    
    return await this.eventoRepository.save(evento);
  }

  //Delete
  async excluirEvento(id: number) {
    const evento = await this.buscarEspecifico(id);
    if (!evento){
      throw new NotFoundException("O evento selecionado não existe");
    }

    return await this.eventoRepository.remove(evento);
  }
}
