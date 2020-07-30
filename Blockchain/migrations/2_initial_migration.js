const Migrations = artifacts.require("curtaily");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
