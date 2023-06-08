const A = artifacts.require("ADD"); // require안 이름은 컨트랙트명과 같아야함
const B = artifacts.require("SUB");

module.exports = function (deployer) {
  deployer.deploy(A);
  deployer.deploy(B);
};
