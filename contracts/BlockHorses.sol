pragma solidity ^0.5.00;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Enumerable.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Metadata.sol";
import "openzeppelin-solidity/contracts/access/roles/MinterRole.sol";

/**
 * @title Full ERC721 Token
 * This implementation includes all the required and some optional functionality of the ERC721 standard
 * Moreover, it includes approve all functionality using operator terminology
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
 */
contract BlockHorses is ERC721, ERC721Enumerable, ERC721Metadata, MinterRole {

  constructor () public ERC721Metadata("BlockHorses", "HORSE") {
    // solhint-disable-previous-line no-empty-blocks
  }

  //EXAMPLE RESPONSE FROM TOKEN URI: https://opensea-creatures-api.herokuapp.com/api/creature/3

  function mint(address to, string memory tokenURI) public onlyMinter returns (bool) {
    uint256 tokenId = _getNextTokenId();
    _mint(to, tokenId);
    _setTokenURI(tokenId, tokenURI);
    return true;
  }

  function _getNextTokenId() private view returns (uint256) {
    return totalSupply().add(1);
  }
}