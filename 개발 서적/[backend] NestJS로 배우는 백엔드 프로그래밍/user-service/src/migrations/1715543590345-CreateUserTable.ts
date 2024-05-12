import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1715543590345 implements MigrationInterface {
    name = 'CreateUserTable1715543590345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`test\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`test\` varchar(60) NOT NULL`);
    }

}
