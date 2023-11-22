import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganizadorDto } from './dto/create-organizadore.dto';
import { UpdateOrganizadorDto } from './dto/update-organizadore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Organizador } from './entities/organizadore.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class OrganizadoresService {
  constructor(
    @InjectRepository(Organizador)
    private readonly organizadorRepository: Repository<Organizador>,
  ){}

  //get
  async buscarTodos(): Promise<Organizador[]> {
    return await this.organizadorRepository.find({
      order: {id: "ASC"},
    });
  }

  async buscarEspecifico(id: number) {
    const organizador = await this.organizadorRepository.findOneBy({id});

    if(!organizador){
      throw new NotFoundException("O organizador não foi encontrado");
    }

    return await this.organizadorRepository.findOneBy({id});
  }

  //post
  async criarUsuarioOrganizador(createOrganizadorDto: CreateOrganizadorDto): Promise<Organizador> {
    const novoOrganizador = this.organizadorRepository.create(createOrganizadorDto);
    
    const senhaHash = await bcrypt.hash(novoOrganizador.senha, 10);

    novoOrganizador.senha = senhaHash;

    return await this.organizadorRepository.save(novoOrganizador);
  }

  //patch
  async atualizarOrganizador(id: number, updateOrganizadoreDto: UpdateOrganizadorDto) {
    const organizador = await this.buscarEspecifico(id);

    const senhaHash = await bcrypt.hash(organizador.senha, 10);
    organizador.senha = senhaHash;

    //Object.assign(organizador, updateOrganizadoreDto);
    return await this.organizadorRepository.save(organizador);
  }

  //delete
  async excluirOrganizador(id: number) {
    const organizador = await this.buscarEspecifico(id);
    
    if(!organizador){
      throw new NotFoundException("O organizador não foi encontrado");
    }
    return await this.organizadorRepository.remove(organizador);
  }
}
