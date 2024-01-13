import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedArticlesTable1701495821797 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO \`articles\` (\`user_id\`, \`title\`, \`body\`, \`publish_flg\`) VALUES
          ('1', 'Todo 1', 'Content 1', 'false'),
          ('2', 'Todo 2', 'Content 2', 'false');
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE \`articles\`;
    `);
  }
}
