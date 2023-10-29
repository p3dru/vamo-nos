import { MigrationInterface, QueryRunner } from "typeorm"

export class AlterarTableUsuario1698510861672 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE IF EXISTS usuario;");; //exclui a tabela antiga
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
