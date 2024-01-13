import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Todo } from './article/entity/Article';
import { User } from './auth/entity/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'user',
  password: 'pass',
  database: 'NEXTJS_QIITA_COPY_APP_DB', // Docker Composeで指定したMySQLのデータベース名
  synchronize: true,
  logging: true,
  entities: [Todo, User],
  migrations: ['dist/migration/*.js'],
  subscribers: [],
});
