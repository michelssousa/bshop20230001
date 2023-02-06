module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePaths: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'src-support/(.*)': '<rootDir>/src/suport/$1',
    'src-entities/(.*)': '<rootDir>/src/__entities__/$1',
    'src-services/(.*)': '<rootDir>/src/__services__/$1',
    'tests/(.*)': '<rootDir>/__tests__/$1',
  },
};
