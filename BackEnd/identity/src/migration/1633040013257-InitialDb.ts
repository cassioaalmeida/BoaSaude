import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialDb1633040013257 implements MigrationInterface {
    name = 'InitialDb1633040013257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "boasaudelogin".."user" ("id" int NOT NULL IDENTITY(1,1), "email" nvarchar(255) NOT NULL, "passwordHash" nvarchar(255) NOT NULL, "active" bit NOT NULL, "roleId" int, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "boasaudelogin".."role" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "boasaudelogin".."user" ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES "boasaudelogin".."role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`INSERT role (description) values ('Administrator')`)
        await queryRunner.query(`INSERT role (description) values ('Associate')`)
        await queryRunner.query(`INSERT role (description) values ('ProviderMedical')`)
        await queryRunner.query(`INSERT role (description) values ('ProviderSeller')`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaudelogin".."user" DROP CONSTRAINT "FK_c28e52f758e7bbc53828db92194"`);
        await queryRunner.query(`DROP TABLE "boasaudelogin".."role"`);
        await queryRunner.query(`DROP TABLE "boasaudelogin".."user"`);
    }

}
