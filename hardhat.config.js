require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// require("hardhat-watcher");

module.exports = {
  defaultNetwork: "testnet",
  networks: {
    hardhat: {},
    testnet:{
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: ['1471bfc490af122d0ef54ff4d5bff62817920aa29ea0ba6a90cf9f90eb1ea479']
    },
  
  },
  watcher: {
    compilation: {
      tasks: ["compile"],
      files: ["./contracts"],
      verbose: true,
    },
    ci: {
      tasks: ["clean", {command: "compile", params: {quiet: true}}, {
        command: "test",
        params: {noCompile: true, testFiles: ["testfile.ts"]}
      }],
    }
  },
  etherscan: {
    apiKey: "XIBRQWVBQ9965HWXU135TCB1HI6CRDJNWW"                //Rinby
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0"
      },
      {
        version: "0.6.2"
      },
      {
        version: "0.5.0"
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}