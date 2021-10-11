import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserAndPartner1633969610981 implements MigrationInterface {
    name = 'AddUserAndPartner1633969610981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "boasaude".."user" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "address" nvarchar(255) NOT NULL, "city" nvarchar(255) NOT NULL, "state" nvarchar(255) NOT NULL, "age" int NOT NULL, "type" int NOT NULL, "userLoginId" int NOT NULL, "active" bit NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "boasaude".."partner" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "phone" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "address" nvarchar(255) NOT NULL, "city" nvarchar(255) NOT NULL, "state" nvarchar(255) NOT NULL, "longitude" nvarchar(255) NOT NULL, "latidute" nvarchar(255) NOT NULL, "type" int NOT NULL, "active" bit NOT NULL, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, CONSTRAINT "PK_8f34ff11ddd5459eacbfacd48ca" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "boasaude".."partner"`);
        await queryRunner.query(`DROP TABLE "boasaude".."user"`);
    }

}
