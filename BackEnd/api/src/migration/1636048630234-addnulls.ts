import {MigrationInterface, QueryRunner} from "typeorm";

export class addnulls1636048630234 implements MigrationInterface {
    name = 'addnulls1636048630234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "name" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "phone" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "email" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "address" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "city" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "state" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "age" int`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "userLoginId" int`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "name" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "phone" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "email" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "address" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "city" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "state" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "longitude" nvarchar(255)`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "latidute" nvarchar(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "latidute" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "longitude" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "state" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "city" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "address" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "email" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "phone" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."partner" ALTER COLUMN "name" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "userLoginId" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "age" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "state" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "city" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "address" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "email" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "phone" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaude"."dbo"."user" ALTER COLUMN "name" nvarchar(255) NOT NULL`);
    }

}
