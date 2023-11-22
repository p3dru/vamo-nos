import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['email'])
export class Administrador {
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
}
