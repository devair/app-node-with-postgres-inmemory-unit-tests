import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config()

const commonConfig = {
  entities: [__dirname + '/entities/*.ts'],
  synchronize: true,
};

const developmentConfig: DataSourceOptions = {
  ...commonConfig,
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const testConfig: DataSourceOptions = {
  ...commonConfig,
  type: 'sqlite',
  database: ':memory:',
};

const dataSourceConfig  = process.env.NODE_ENV === 'test' ? testConfig : developmentConfig;

export const AppDataSource = new DataSource(dataSourceConfig);