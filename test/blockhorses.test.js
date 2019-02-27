const { BN, constants, expectEvent, shouldFail } = require('openzeppelin-test-helpers');
const BlockHorses = artifacts.require('BlockHorses')

contract('BlockHorses', function([minter, anotherAccount]) {
  let horses
  let name = "BlockHorses";
  let symbol = "HORSE";
  let baseTokenUri = "https://blockhorses.github.io/BlockHorses/api/horse/";
  let tokenUri = baseTokenUri + "1";


  beforeEach(async function() {
    horses = await BlockHorses.new({ from: minter })
  });

  describe('token details', function() {
    it('has details', async function() {
      const _name = await horses.name();
      assert.equal(name, _name);
      const _symbol = await horses.symbol();
      assert.equal(symbol, _symbol);
      const _totalSupply = await horses.totalSupply();
      assert.equal(0, _totalSupply);
      const _baseTokenUri = await horses.baseTokenURI();
      assert.equal(baseTokenUri, _baseTokenUri);
    })
  });

  describe('token minting', function() {
    it('mint a token', async function() {
      await horses.mint(anotherAccount);
      const _totalSupply = await horses.totalSupply();
      assert.equal(1, _totalSupply);
      const minterBalance = await horses.balanceOf(minter);
      assert.equal(0, minterBalance);
      anotherAccountBalance = await horses.balanceOf(anotherAccount);
      assert.equal(1, anotherAccountBalance);
      const _owner = await horses.ownerOf(1);
      assert.equal(anotherAccount, _owner);
      const _tokenUri = await horses.tokenURI(1);
      assert.equal(tokenUri, _tokenUri);
    });

    it('mint multiple tokens', async function() {
      for (var i=0; i < 10; i++) {
        await horses.mint(anotherAccount);
      }
      
      const _totalSupply = await horses.totalSupply();
      assert.equal(10, _totalSupply);
      const minterBalance = await horses.balanceOf(minter);
      assert.equal(0, minterBalance);
      anotherAccountBalance = await horses.balanceOf(anotherAccount);
      assert.equal(10, anotherAccountBalance);
      const _owner = await horses.ownerOf(10);
      assert.equal(anotherAccount, _owner);
      const _tokenUri = await horses.tokenURI(1);
      assert.equal(tokenUri, _tokenUri);
    });

    it('non-minter cannot mint a token', async function() {
      await shouldFail.reverting(horses.mint(anotherAccount, { from: anotherAccount }));
    })
  });
})

