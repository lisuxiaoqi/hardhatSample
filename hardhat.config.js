require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: ["8ff3ca2d9985c3a52b459e2f6e7822b23e1af845961e22128d5f372fb9aa5f17"],
    },
    okbtestokx: {
      url: "https://okbtestrpc.okx.com",
      accounts: ["13977ec5c2fd6f2fa064a54919ea6f1b2efaf2982082e14560cf7536bd1ad670"],
    },
    okbtest: {
      url: "https://okbtestrpc.okbchain.org",
      accounts: ["13977ec5c2fd6f2fa064a54919ea6f1b2efaf2982082e14560cf7536bd1ad670"],
    },
  },
  solidity: "0.8.18",
};
