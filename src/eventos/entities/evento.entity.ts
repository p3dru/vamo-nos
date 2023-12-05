import { Usuario } from "../../usuarios/entities/usuario.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    titulo: string;

    @Column("text")
    descricao: string;

    @Column({length: 30})
    categoria: string;

    @Column("bytea")
    imagem_evento: Buffer[];

    @Column("date")
    data: Date;

    @Column()
    hora: string;

    @Column({default: true})
    ativo: boolean;

    @ManyToMany(() => Usuario)
    @JoinTable()
    usuarios_cadastrados: Usuario[];

    @ManyToOne(() => Usuario)
    @JoinTable()
    usuario_criador: Usuario;
}
