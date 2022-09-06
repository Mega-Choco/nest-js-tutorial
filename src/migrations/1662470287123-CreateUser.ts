import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1662470287123 implements MigrationInterface {
    name = 'CreateUser1662470287123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "country" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "country"`);
    }

}
