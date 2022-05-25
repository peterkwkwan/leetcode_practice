const assert = require('assert');
const convertRomanNumeral = require('../index');

describe('index', () => {
  describe('Roman Numeral Mapping', () => {
    it('I should return 1"', () => {
      assert.equal(convertRomanNumeral('I'), 1)
    })
    it('V should return 5"', () => {
      assert.equal(convertRomanNumeral('V'), 5)
    })
    it('X should return 10"', () => {
      assert.equal(convertRomanNumeral('X'), 10)
    })
    it('L should return 50"', () => {
      assert.equal(convertRomanNumeral('L'), 50)
    })
    it('C should return 100"', () => {
      assert.equal(convertRomanNumeral('C'), 100)
    })
    it('D should return 500"', () => {
      assert.equal(convertRomanNumeral('D'), 500)
    })
    it('M should return 1000"', () => {
      assert.equal(convertRomanNumeral('M'), 1000)
    })
  })

  describe('Roman Numeral Combinations', () => {
    it('VI should return 6"', () => {
      assert.equal(convertRomanNumeral('VI'), 6)
    })
    it('LXX should return 70"', () => {
      assert.equal(convertRomanNumeral('LXX'), 70)
    })
    it('MCC should return 1200"', () => {
      assert.equal(convertRomanNumeral('MCC'), 1200)
    })
    it('IV should return 4"', () => {
      assert.equal(convertRomanNumeral('IV'), 4)
    })
    it('XC should return 90"', () => {
      assert.equal(convertRomanNumeral('XC'), 90)
    })
    it('CM should return 900"', () => {
      assert.equal(convertRomanNumeral('CM'), 900)
    })
    it('XCV should return 95"', () => {
      assert.equal(convertRomanNumeral('XCV'), 95)
    })
    it('XCIX should return 99"', () => {
      assert.equal(convertRomanNumeral('XCIX'), 99)
    })
    it('XX should return 20"', () => {
      assert.equal(convertRomanNumeral('XX'), 20)
    })
    it('XXX should return 30"', () => {
      assert.equal(convertRomanNumeral('XXX'), 30)
    })
    it('XIX should return 19"', () => {
      assert.equal(convertRomanNumeral('XIX'), 19)
    })
  })

   
})
