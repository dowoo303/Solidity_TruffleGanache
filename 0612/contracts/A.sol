// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;


contract A {
  function myAddress() public view returns(address) {
    return address(this);
  }

  uint public a;

  function setA(uint _a) public {
    a = _a;
  }

  function input(uint _a, uint _b, uint _c) public pure returns(uint) {
    return _a*_b*_c;
  }
}