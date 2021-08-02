module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setUpTests.js"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
};
