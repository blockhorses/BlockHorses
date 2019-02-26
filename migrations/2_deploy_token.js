var Strings = artifacts.require("./Strings.sol");
var BlockHorses = artifacts.require("./BlockHorses.sol");

module.exports = function(deployer) {
  deployer.deploy(Strings);
  deployer.link(Strings, BlockHorses);
  deployer.deploy(BlockHorses);
};