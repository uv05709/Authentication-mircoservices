/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Use ts-jest to compile TypeScript tests
  preset: "ts-jest",

  // Node test environment for a backend auth service
  testEnvironment: "node",

  // Look for tests inside src/
  roots: ["<rootDir>/src"],

  // Match test files: *.test.ts or *.spec.ts
  testMatch: ["**/__tests__/**/*.test.ts", "**/__tests__/**/*.spec.ts"],

  // Coverage configuration
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/__tests__/**",
    "!src/**/*.d.ts",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "clover"],

  // Module file extensions
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
