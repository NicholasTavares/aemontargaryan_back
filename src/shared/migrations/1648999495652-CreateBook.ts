import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class CreateBook1648999495652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'books',
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
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()',
                    }),
                    new TableColumn({
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()',
                    }),
                    new TableColumn({
                        name: 'deletedAt',
                        isNullable: true,
                        type: 'timestamp',
                        default: 'NULL',
                    }),
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books')
    }

}
