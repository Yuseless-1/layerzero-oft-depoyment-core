// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "../yourtokenname.sol";

contract MyOFTMock is yourtokenname {
    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate
    ) yourtokenname(_name, _symbol, _lzEndpoint, _delegate) {}
}