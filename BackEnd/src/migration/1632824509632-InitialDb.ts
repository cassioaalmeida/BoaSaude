import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialDb1632824509632 implements MigrationInterface {
    name = 'InitialDb1632824509632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "boasaudeidentity".."user" ("id" int NOT NULL IDENTITY(1,1), "email" nvarchar(255) NOT NULL, "passwordHash" nvarchar(255) NOT NULL, "active" bit NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "boasaudeidentity".."role" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, "userId" int, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "boasaudeidentity".."claim" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, CONSTRAINT "PK_466b305cc2e591047fa1ce58f81" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "boasaudeidentity".."role_claims_claim" ("roleId" int NOT NULL, "claimId" int NOT NULL, CONSTRAINT "PK_5a134379b65bbdb65cc5db2ca9d" PRIMARY KEY ("roleId", "claimId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9a573d736fbae5158911876c15" ON "boasaudeidentity".."role_claims_claim" ("roleId") `);
        await queryRunner.query(`CREATE INDEX "IDX_f4ab3216a1ca884c46707cdda5" ON "boasaudeidentity".."role_claims_claim" ("claimId") `);
        await queryRunner.query(`ALTER TABLE "boasaudeidentity".."role" ADD CONSTRAINT "FK_3e02d32dd4707c91433de0390ea" FOREIGN KEY ("userId") REFERENCES "boasaudeidentity".."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "boasaudeidentity".."role_claims_claim" ADD CONSTRAINT "FK_9a573d736fbae5158911876c15b" FOREIGN KEY ("roleId") REFERENCES "boasaudeidentity".."role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "boasaudeidentity".."role_claims_claim" ADD CONSTRAINT "FK_f4ab3216a1ca884c46707cdda52" FOREIGN KEY ("claimId") REFERENCES "boasaudeidentity".."claim"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaudeidentity".."role_claims_claim" DROP CONSTRAINT "FK_f4ab3216a1ca884c46707cdda52"`);
        await queryRunner.query(`ALTER TABLE "boasaudeidentity".."role_claims_claim" DROP CONSTRAINT "FK_9a573d736fbae5158911876c15b"`);
        await queryRunner.query(`ALTER TABLE "boasaudeidentity".."role" DROP CONSTRAINT "FK_3e02d32dd4707c91433de0390ea"`);
        await queryRunner.query(`DROP INDEX "IDX_f4ab3216a1ca884c46707cdda5" ON "boasaudeidentity".."role_claims_claim"`);
        await queryRunner.query(`DROP INDEX "IDX_9a573d736fbae5158911876c15" ON "boasaudeidentity".."role_claims_claim"`);
        await queryRunner.query(`DROP TABLE "boasaudeidentity".."role_claims_claim"`);
        await queryRunner.query(`DROP TABLE "boasaudeidentity".."claim"`);
        await queryRunner.query(`DROP TABLE "boasaudeidentity".."role"`);
        await queryRunner.query(`DROP TABLE "boasaudeidentity".."user"`);
    }

}
