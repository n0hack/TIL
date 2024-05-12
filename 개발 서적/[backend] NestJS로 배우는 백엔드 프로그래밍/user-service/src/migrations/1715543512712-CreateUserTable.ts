import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1715543512712 implements MigrationInterface {
    name = 'CreateUserTable1715543512712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`test\` varchar(60) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`test\``);
    }

}
