import { Injectable, NotFoundException } from '@nestjs/common';
import { AdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrador } from './entities/administrador.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { AdministradoresController } from './administradores.controller';

@Injectable()
export class AdministradoresService {
  constructor(
    @InjectRepository(Administrador)
    private administradorRepository: Repository<Administrador>,
  ){}

  async criarAdministrador(administradorDto: AdministradorDto): Promise<Administrador> {
    const novoAdministrador = this.administradorRepository.create(administradorDto);

    const senhaHash = await bcrypt.hash(novoAdministrador.senha, 10)
    novoAdministrador.senha = senhaHash;

    return await this.administradorRepository.save(novoAdministrador);
  }

  async atualizarAdministrador(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    const administrador = await this.administradorRepository.findOneBy({id});
    if(!administrador){
      throw new NotFoundException('Usuário não encontrado');
    }

    if(administrador.senha){
      const senhaHash = await bcrypt.hash(administrador.senha, 10);
      administrador.senha = senhaHash;
    }


    //Object.assign(administrador, updateAdministradorDto);
    return await this.administradorRepository.save(administrador);
  }

  async buscarTodos(): Promise<Administrador[]> {
    return await this.administradorRepository.find({
      order: {id: "ASC"},
    });
  }

  async buscarEspecifico(id: number) {
    const administrador = await this.administradorRepository.findOneBy({id});
    if(!administrador){
      throw new NotFoundException('Usuário não encontrado');
    }

    return administrador;
  }

  async excluirAdministrador(id: number) {
    const administrador = await this.buscarEspecifico(id);

    return await this.administradorRepository.remove(administrador);
  }
}
