// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract A {
  uint public a = 100;

  function setA(uint _a) public {
    a = _a;
  }

  function add(uint _a, uint _b) public pure returns(uint) {
    return _a+_b;
  }
}



contract B {
  function myAddress() public view returns(address) {
    return address(this);
  }

  uint public a;

  function setA(uint _a) public {
    a = _a;
  }

  function input(uint _a, uint _b, uint _c) public returns(uint) {
    return _a*_b*_c;
  }
}