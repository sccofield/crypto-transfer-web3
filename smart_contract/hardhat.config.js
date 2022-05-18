// https://eth-ropsten.alchemyapi.io/v2/nVaWExRlYY-aIEQ4edkSyBq-prKoiime
// Transactions deployed to:  0x260ce8E2Fc73036c6B99f29b437fBB39cee46f6d

require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/nVaWExRlYY-aIEQ4edkSyBq-prKoiime",
      accounts : ["48fa7ad8c99083323795aa560d712a231f7d7d5b2bd97bffad6c2aa6fc6976ee"]
    }
  }
};
