import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { Query } from "typeorm/driver/Query";

export class CreateUsers1748184270306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Garante que a extensão uuid-ossp está habilitada
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        await queryRunner.createTable(
            new Table({
                "name": "Users",
                columns: [
                    {   name: "id",
                        type: "uuid",
                        isPrimary: true,
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users");
    }

}
