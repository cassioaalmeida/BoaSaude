import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserInsurance1634400024290 implements MigrationInterface {
    name = 'AddUserInsurance1634400024290'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "boasaude".."user_insurance" ("id" int NOT NULL IDENTITY(1,1), "cardNumber" nvarchar(255) NOT NULL, "hasDental" bit NOT NULL, "status" int NOT NULL, "montlhyCost" decimal(10,2) NOT NULL CONSTRAINT "DF_4121109350273509a4adb4d7f60" DEFAULT 0, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, "insuranceId" int, "userId" int, CONSTRAINT "PK_cbd57648286197f6d7cbc26cb05" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_d6c312a399f180107d54e86854" ON "boasaude".."user_insurance" ("userId") WHERE "userId" IS NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude".."user_insurance" ADD CONSTRAINT "FK_5675461a0ed7d0adadf2f1dd4dc" FOREIGN KEY ("insuranceId") REFERENCES "boasaude".."insurance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "boasaude".."user_insurance" ADD CONSTRAINT "FK_d6c312a399f180107d54e868546" FOREIGN KEY ("userId") REFERENCES "boasaude".."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaude".."user_insurance" DROP CONSTRAINT "FK_d6c312a399f180107d54e868546"`);
        await queryRunner.query(`ALTER TABLE "boasaude".."user_insurance" DROP CONSTRAINT "FK_5675461a0ed7d0adadf2f1dd4dc"`);
        await queryRunner.query(`DROP INDEX "REL_d6c312a399f180107d54e86854" ON "boasaude".."user_insurance"`);
        await queryRunner.query(`DROP TABLE "boasaude".."user_insurance"`);
    }

}
