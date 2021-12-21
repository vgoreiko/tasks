import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class bla1640080162413 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('task', 'test');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'task',
      new TableColumn({
        name: 'test',
        type: 'text',
        isNullable: true,
      }),
    );
  }
}
