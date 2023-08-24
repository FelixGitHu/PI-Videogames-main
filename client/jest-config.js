module.exports = {
    // The test environment that Jest will use.
    testEnvironment: 'jsdom',
  
    // The files that Jest will look for tests.
    testMatch: ['**/*.test.js'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mjs'],
    // The modules that Jest will transform.
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
  
    // The modules that Jest will ignore.
    transformIgnorePatterns: ['node_modules/*'],
    
      "preset": '@babel/preset-react'
    ,
    // The global variables that Jest will make available to tests.
    globals: {
      
      
    },
  };