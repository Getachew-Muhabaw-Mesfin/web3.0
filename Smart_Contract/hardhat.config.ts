import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

export default config;
