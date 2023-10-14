// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// import "@openzeppelin/contracts/utils/Counters.sol";

contract TiredLife is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    mapping(string => uint8) existingURIs;

    uint256 private _tokenIdCounter;

    constructor(
        address initialOwner
    ) ERC721("TiredLife", "TDL") Ownable(initialOwner) {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    function payToMint(
        address recipient,
        string memory metadatURI
    ) public payable returns (uint256) {
        require(existingURIs[metadatURI] != 1, "NFT already minted");
        require(msg.value >= 0.5 ether, "Not enough ETH sent; check price!");

        uint256 newItemId = _tokenIdCounter;
        existingURIs[metadatURI] = 1;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, metadatURI);

        return newItemId;
    }

    function count() public view returns (uint256) {
        return _tokenIdCounter;
    }
}
