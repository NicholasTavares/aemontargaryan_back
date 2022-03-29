import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class CreateUser1648584536308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    new TableColumn({
                        name: 'id',
                        type: 'int',
                        isNullable: false,
                        isPrimary: true,
                        isUnique: true,
                    }),
                    new TableColumn({
                        name: 'name',
                        type: 'varchar(120)',
                    }),
                    new TableColumn({
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    }),
                    new TableColumn({
                        name: 'password',
                        type: 'varchar'
                    }),
                    new TableColumn({
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    }),
                    new TableColumn({
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    }),
                    new TableColumn({
                        name: 'deleted_at',
                        isNullable: true,
                        type: 'timestamp',
                        default: 'NULL',
                    }),
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
