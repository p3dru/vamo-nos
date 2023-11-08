import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 30})
    titulo: string;

    @Column("text")
    descricao: string;

    @Column({length: 20})
    categoria: string;

    @Column("bytea")
    imagem_evento: Buffer[];

    @Column("date")
    data: Date;

    @Column()
    hora: string;

    /*
    @ManyToMany(() => Usuario)
    @JoinTable()
    lista_participantes: Usuario[];
    */
}
