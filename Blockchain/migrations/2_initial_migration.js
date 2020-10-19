const Migrations = artifacts.require("curtaily");
const m = 2;

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
