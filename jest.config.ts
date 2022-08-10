
export default {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: ({ prefix: "<rootDir>/src/" }),
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts"],
};