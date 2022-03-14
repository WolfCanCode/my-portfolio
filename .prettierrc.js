// https://prettier.io/docs/en/configuration.html
module.exports = {
  overrides: [
    {
      files: "*.sol",
      options: {
        // Global configuration
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        // Common configuration
        bracketSpacing: false,
        // Solidity configuration
        explicitTypes: "always"
      }
    }
  ]
};
