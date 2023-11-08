import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["email"])
export class Organizador {
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
    eventos_criados: Evento[];
    */
}
