import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserDocument1634321334770 implements MigrationInterface {
    name = 'AddUserDocument1634321334770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ADD "document" nvarchar(255) NOT NULL CONSTRAINT "DF_71fdad8489d3d818ec393e6eb14" DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" DROP CONSTRAINT "DF_71fdad8489d3d818ec393e6eb14"`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" DROP COLUMN "document"`);
    }

}
