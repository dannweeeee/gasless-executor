// SPDX-License-Identifier: LICENSED

pragma solidity ^0.8.27;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC2771Context} from "@gelatonetwork/relay-context/contracts/vendor/ERC2771Context.sol";
import {Context} from "@openzeppelin/contracts/utils/Context.sol";

contract GojoNft is ERC721, ERC2771Context {
    uint256 private s_tokenCounter;

    mapping(uint256 => string) private s_tokenIdToUri;

    event GojoNftMinted(address _msgSender, uint256 tokenCounter);

    constructor(string memory _name, string memory _symbol, address _gelatoRelay)
        ERC721(_name, _symbol)
        ERC2771Context(_gelatoRelay)
    {
        s_tokenCounter = 0;
    }

    function mintNft(string memory tokenUri) public {
        address msgSender = _msgSender();

        s_tokenIdToUri[s_tokenCounter] = tokenUri;
        _safeMint(_msgSender(), s_tokenCounter);

        emit GojoNftMinted(msgSender, s_tokenCounter);

        s_tokenCounter++;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return s_tokenIdToUri[tokenId];
    }

    function _msgSender() internal view override(Context, ERC2771Context) returns (address) {
        return ERC2771Context._msgSender();
    }

    function _msgData() internal view override(Context, ERC2771Context) returns (bytes calldata) {
        return ERC2771Context._msgData();
    }
}
