import abi from './Transactions.json'

export const contractABI = abi.abi; // Get from artifacts/contracts/trasactions.sol/ trasactions.json and copy that filet to utiles/Transactions.json to acess the api for fronted
// run npx hardhat run scripts/deploy.ts --network goerli     to get this address👇👇
export const contractAddress = "0x8182dAa424CAF13aD394870806F78af923E0a033";
