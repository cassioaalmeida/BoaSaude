import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialDb1638361383611 implements MigrationInterface {
    name = 'InitialDb1638361383611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "insurance" ("id" SERIAL NOT NULL, "type" integer NOT NULL, "value1" numeric(10,2) NOT NULL DEFAULT '0', "value2" numeric(10,2) NOT NULL DEFAULT '0', "value3" numeric(10,2) NOT NULL DEFAULT '0', "value4" numeric(10,2) NOT NULL DEFAULT '0', "value5" numeric(10,2) NOT NULL DEFAULT '0', "value6" numeric(10,2) NOT NULL DEFAULT '0', "value7" numeric(10,2) NOT NULL DEFAULT '0', "value8" numeric(10,2) NOT NULL DEFAULT '0', "value9" numeric(10,2) NOT NULL DEFAULT '0', "value10" numeric(10,2) NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_07152a21fd75ea211dcea53e3c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_insurance" ("id" SERIAL NOT NULL, "cardNumber" character varying, "hasDental" boolean NOT NULL, "status" integer NOT NULL, "montlhyCost" numeric(10,2) NOT NULL DEFAULT '0', "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "insuranceId" integer, "userId" integer, CONSTRAINT "REL_d6c312a399f180107d54e86854" UNIQUE ("userId"), CONSTRAINT "PK_cbd57648286197f6d7cbc26cb05" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying, "phone" character varying, "document" character varying NOT NULL DEFAULT '', "email" character varying, "CEP" character varying NOT NULL DEFAULT '', "address" character varying, "number" integer NOT NULL DEFAULT '0', "city" character varying, "complement" character varying NOT NULL DEFAULT '', "state" character varying, "age" integer, "type" integer NOT NULL, "userLoginId" integer, "active" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "partner" ("id" SERIAL NOT NULL, "name" character varying, "phone" character varying, "email" character varying, "address" character varying, "city" character varying, "state" character varying, "longitude" character varying, "latidute" character varying, "type" integer NOT NULL, "active" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_8f34ff11ddd5459eacbfacd48ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_insurance" ADD CONSTRAINT "FK_5675461a0ed7d0adadf2f1dd4dc" FOREIGN KEY ("insuranceId") REFERENCES "insurance"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_insurance" ADD CONSTRAINT "FK_d6c312a399f180107d54e868546" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_insurance" DROP CONSTRAINT "FK_d6c312a399f180107d54e868546"`);
        await queryRunner.query(`ALTER TABLE "user_insurance" DROP CONSTRAINT "FK_5675461a0ed7d0adadf2f1dd4dc"`);
        await queryRunner.query(`DROP TABLE "partner"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_insurance"`);
        await queryRunner.query(`DROP TABLE "insurance"`);
    }

}
