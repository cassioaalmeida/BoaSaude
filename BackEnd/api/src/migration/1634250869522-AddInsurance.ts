import {MigrationInterface, QueryRunner} from "typeorm";

export class AddInsurance1634250869522 implements MigrationInterface {
    name = 'AddInsurance1634250869522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "boasaude".."insurance" ("id" int NOT NULL IDENTITY(1,1), "type" int NOT NULL, "value1" decimal(10,2) NOT NULL CONSTRAINT "DF_b847af8c4b4bc44490cacc3ecf8" DEFAULT 0, "value2" decimal(10,2) NOT NULL CONSTRAINT "DF_4587219dcfebbcceda732c4aacb" DEFAULT 0, "value3" decimal(10,2) NOT NULL CONSTRAINT "DF_791c0a97a7d32dce16ae9979d59" DEFAULT 0, "value4" decimal(10,2) NOT NULL CONSTRAINT "DF_9927719183da38dd7114784a629" DEFAULT 0, "value5" decimal(10,2) NOT NULL CONSTRAINT "DF_c2a974ff1b811fd5f8622ad5597" DEFAULT 0, "value6" decimal(10,2) NOT NULL CONSTRAINT "DF_2840ba3df8872e5aaa13e38a992" DEFAULT 0, "value7" decimal(10,2) NOT NULL CONSTRAINT "DF_38fe38e21f0568c178dd11a0219" DEFAULT 0, "value8" decimal(10,2) NOT NULL CONSTRAINT "DF_574d200e7794f9d822132732459" DEFAULT 0, "value9" decimal(10,2) NOT NULL CONSTRAINT "DF_b9c37b1d88380ce6feff70f9017" DEFAULT 0, "value10" decimal(10,2) NOT NULL CONSTRAINT "DF_f35b0200bc991ffefff93b3c7ec" DEFAULT 0, "createdAt" datetime NOT NULL, "updatedAt" datetime NOT NULL, CONSTRAINT "PK_07152a21fd75ea211dcea53e3c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`INSERT INTO "boasaude".."insurance" VALUES (1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, GETDATE(), GETDATE())`)
        await queryRunner.query(`INSERT INTO "boasaude".."insurance" VALUES (2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, GETDATE(), GETDATE())`)
        await queryRunner.query(`INSERT INTO "boasaude".."insurance" VALUES (3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, GETDATE(), GETDATE())`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "boasaude".."insurance"`);
    }

}
