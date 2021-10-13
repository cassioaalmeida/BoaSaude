import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserFields1634127636057 implements MigrationInterface {
    name = 'AddUserFields1634127636057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ADD "CEP" nvarchar(255) NOT NULL CONSTRAINT "DF_e1ecfc6cf5ad688e99d40e5297a" DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ADD "number" int NOT NULL CONSTRAINT "DF_81e762f957fa9a13524029a3b7f" DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ADD "complement" nvarchar(255) NOT NULL CONSTRAINT "DF_9aafdfacf97712658b7138af834" DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" DROP CONSTRAINT "DF_9aafdfacf97712658b7138af834"`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" DROP CONSTRAINT "DF_81e762f957fa9a13524029a3b7f"`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" DROP CONSTRAINT "DF_e1ecfc6cf5ad688e99d40e5297a"`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" DROP COLUMN "CEP"`);
    }

}
