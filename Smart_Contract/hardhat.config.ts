// https://eth-goerli.g.alchemy.com/v2/rzn7C5ujpWhXSaL4yC8lLbqo0qEza_q6
// import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/rzn7C5ujpWhXSaL4yC8lLbqo0qEza_q6",
      accounts: [
        "068e0a89fa45943a0121587fca9fb29fbcce296ab51c677196360fd4b8dd06a4",
      ],
    },
  },
};


