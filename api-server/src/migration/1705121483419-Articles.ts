// ファイル生成コマンド npx typeorm migration:create src/migration/Articles
import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticlesTable1705121483419 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS \`articles\` (
          \`id\` INT NOT NULL AUTO_INCREMENT,
          \`user_id\` INT NOT NULL,
          \`title\` VARCHAR(255) NOT NULL,
          \`body\` VARCHAR(1500) NOT NULL,
          \`publish_flg\` BOOLEAN NOT NULL,
          \`publushed_at\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          \`createdAt\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          \`updatedAt\` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (\`id\`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE IF EXISTS \`articles\`;
    `);
  }
}
