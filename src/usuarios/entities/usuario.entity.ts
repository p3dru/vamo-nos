import { Evento } from "src/eventos/entities/evento.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 60})
    nome: string;

    @Column({length: 60})
    email: string;

    @Column("text")
    senha: string;

    @Column("bytea")
    imagem_perfil: Buffer;

    /*
    @ManyToMany(() => Evento)
    @JoinTable()
    eventos_inscritos: Evento[];
    */
}
