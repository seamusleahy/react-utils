module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules", "dist", "coverage"],

  // roots: ['<rootDir>'],
  preset: "ts-jest",
  testRegex: "src/.*\\.test.(js|jsx|ts|tsx)$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: [],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  // moduleDirectories: ['node_modules', 'src', 'tests'],
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // moduleNameMapper: {
  //   '\\.(css|scss|jpg|png|svg)$': 'mocks/empty.ts',
  // },
  // setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{js{,x},ts{,x}}', '!src/index.tsx', '!src/custom.d.ts'],
};
