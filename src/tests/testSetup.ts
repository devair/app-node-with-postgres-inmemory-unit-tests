import { AppDataSource } from '../data-source'; // Ajuste o caminho conforme necessário

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

