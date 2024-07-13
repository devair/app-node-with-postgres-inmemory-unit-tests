import type {Config} from 'jest';

const config: Config = {
  preset: "ts-jest",
  testEnvironment: 'node',  
  setupFilesAfterEnv: ['<rootDir>/src/tests/testSetup.ts'],
  moduleFileExtensions: ['ts', 'js'],
  transform: {    
    '^.+\\.(t|j)s$': 'ts-jest'
  },    
  coverageProvider: "v8",
  testMatch: ["**/*.spec.ts"],  
  testTimeout: 180000, 
  globalSetup: '<rootDir>/src/tests/globalSetup.ts',
  globalTeardown: '<rootDir>/src/tests/globalTeardown.ts',
  collectCoverage: true, // Habilita a coleta de cobertura de código
  collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/I*.{ts,js}', '!src/**/I*.spec.{ts,js}','!src/test/**/*.spec.{ts,js}'], // Arquivos para coletar cobertura
  coverageDirectory: 'reports/coverage', // Diretório para salvar o relatório de cobertura  
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'reports',
      outputName: 'junit.xml',
    }],
  ],
};

export default config;