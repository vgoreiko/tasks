import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MigrationOne1640079086353 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'task',
      new TableColumn({
        name: 'test',
        type: 'text',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('task', 'test');
  }
}
