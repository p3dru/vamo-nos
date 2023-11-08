import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ){}

  async criarUsuario(usuarioDto: UsuarioDto): Promise<Usuario> {
    const novoUsuario = this.usuarioRepository.create(usuarioDto);
    return await this.usuarioRepository.save(novoUsuario);
  }

  async atualizarUsuario(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({id});
    if (!usuario){
      throw new NotFoundException('Usuário não encontrado');
    }
    Object.assign(usuario, updateUsuarioDto);
    return await this.usuarioRepository.save(usuario);
  }

  async buscarTodos(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      order: {id: "ASC"},
    });
  }

  async buscarEspecifico(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({id});
    if(!usuario){
      throw new NotFoundException('Usuário não encontrado');
    }

    return await this.usuarioRepository.findOneBy({id});
  }

  async excluirUsuario(id: number) {
    const usuario = await this.buscarEspecifico(id);
    if (!usuario){
      throw new NotFoundException('Usuário não encontrado');
    }

    return await this.usuarioRepository.remove(usuario);
  }
}
