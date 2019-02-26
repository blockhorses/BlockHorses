const { BN, constants, expectEvent, shouldFail } = require('openzeppelin-test-helpers');
const BlockHorses = artifacts.require('BlockHorses')

contract('BlockHorses', function([owner, anotherAccount]) {
  let horses
  let name = "BlockHorses";
  let symbol = "HORSE";

  beforeEach(async function() {
    horses = await BlockHorses.new({ from: owner })
  });

  describe('token details', function() {
    it('has details', async function() {
      const _name = await horses.name();
      assert.equal(name, _name);
      const _symbol = await horses.symbol();
      assert.equal(symbol, _symbol);
      const _totalSupply = await horses.totalSupply();
      assert.equal(0, _totalSupply)
    })
  });

  describe('token minting', function() {
    it('mint a token', async function() {
      const _name = await horses.name();
      assert.equal(name, _name);
      const _symbol = await horses.symbol();
      assert.equal(symbol, _symbol);
      const _totalSupply = await horses.totalSupply();
      assert.equal(0, _totalSupply)
    })
  });
})

