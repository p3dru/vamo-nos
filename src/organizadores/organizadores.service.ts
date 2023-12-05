import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { CreateOrganizadorDto } from './dto/create-organizadore.dto';
import { UpdateOrganizadorDto } from './dto/update-organizadore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Organizador } from './entities/organizador.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { AdministradoresGuard, OrganizadoresGuard } from '../auth/auth.guard';

@Injectable()
export class OrganizadoresService {
  constructor(
    @InjectRepository(Organizador)
    private readonly organizadorRepository: Repository<Organizador>,
  ){}

  //get
  @UseGuards(AdministradoresGuard)
  async buscarTodos(): Promise<Organizador[]> {
    return await this.organizadorRepository.find({
      order: {id: "ASC"},
    });
  }

  @UseGuards(AdministradoresGuard)
  async buscarEspecifico(id: number) {
    const organizador = await this.organizadorRepository.findOneBy({id});

    if(!organizador){
      throw new NotFoundException("O organizador não foi encontrado");
    }

    return await this.organizadorRepository.findOneBy({id});
  }

  @UseGuards(AdministradoresGuard)
  async buscarEspecificoPorEmail(email: string){
    const organizador = await this.organizadorRepository.findOneBy({email});
    if(!organizador){
      throw new NotFoundException('Organizador não encontrado');
    }

    return organizador;
  }

  //post
  async criarUsuarioOrganizador(createOrganizadorDto: CreateOrganizadorDto): Promise<Organizador> {
    const novoOrganizador = this.organizadorRepository.create(createOrganizadorDto);
    
    const senhaHash = await bcrypt.hash(novoOrganizador.senha, 10);

    novoOrganizador.senha = senhaHash;

    return await this.organizadorRepository.save(novoOrganizador);
  }

  //patch
  @UseGuards(AdministradoresGuard)
  @UseGuards(OrganizadoresGuard)
  async atualizarOrganizador(id: number, updateOrganizadoreDto: UpdateOrganizadorDto) {
    const organizador = await this.buscarEspecifico(id);

    const senhaHash = await bcrypt.hash(organizador.senha, 10);
    organizador.senha = senhaHash;

    //Object.assign(organizador, updateOrganizadoreDto);
    return await this.organizadorRepository.save(organizador);
  }

  //delete
  @UseGuards(AdministradoresGuard)
  async excluirOrganizador(id: number) {
    const organizador = await this.buscarEspecifico(id);
    
    if(!organizador){
      throw new NotFoundException("O organizador não foi encontrado");
    }
    return await this.organizadorRepository.remove(organizador);
  }
}
