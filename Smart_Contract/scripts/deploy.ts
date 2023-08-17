


// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = ethers.parseEther("0.001");

//   const lock = await ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // // We recommend this pattern to be able to use async/await everywhere
// // // and properly handle errors.
// // main().catch((error) => {
// //   console.error(error);
// //   process.exitCode = 1;
// // });
const hre = require("hardhat");
const { ethers } = hre;
const main =async ()=>{
const Transactions = await hre.ethers.getContractFactory("Transactions");
const transactions = await Transactions.deploy();
await transactions.deployed();
console.log("Transaction is deployed to: ",transactions.address);
}
const runMain=async()=>{
    try {
        await main();
        process.exit(0)
    } catch (error) {
       console.log(error);
       process.exit(1)
    }
}
runMain()