import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserTimeStamp1633041277962 implements MigrationInterface {
    name = 'AddUserTimeStamp1633041277962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaudelogin"."dbo"."user" ADD "createdAt" datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE "boasaudelogin"."dbo"."user" ADD "updatedAt" datetime NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "boasaudelogin"."dbo"."user" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "boasaudelogin"."dbo"."user" DROP COLUMN "createdAt"`);
    }

}
