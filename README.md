## 合约代码
contracts/sample.sol

## 执行步骤
1. 配置hardhat.config.js
2. 执行npx hardhat compile。生成在artifacts目录中
3. 编写部署脚本，scripts/deploy.js。执行npx hardhat run scripts/deploy.js --network localhost
4. 编写调用脚本，scirpts/call.js。填入合约地址，调用合约方法。执行npx hardhat run scripts/call.js --network localhost
