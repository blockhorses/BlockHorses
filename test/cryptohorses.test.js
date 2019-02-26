const { BN, constants, expectEvent, shouldFail } = require('openzeppelin-test-helpers');
const CryptoHorses = artifacts.require('CryptoHorses')

contract('CryptoHorses', function([owner, anotherAccount]) {
  let horses
  let name = "CryptoHorses";
  let symbol = "HORSE";

  beforeEach(async function() {
    horses = await CryptoHorses.new({ from: owner })
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

