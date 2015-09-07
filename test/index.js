const test = require('tape')

const testNarcNumber = require('../lib')

test('matches sum', t => {
  t.ok(testNarcNumber(153))
  t.ok(testNarcNumber(-153))

  t.ok(testNarcNumber(0))
  t.ok(testNarcNumber(1))

  t.notOk(testNarcNumber(100))
  t.notOk(testNarcNumber(152))
  t.notOk(testNarcNumber(154))

  t.end()
})

test('generator', t => {
  const gen = testNarcNumber.searchGenerator()
  const gen2 = testNarcNumber.searchGenerator()

  t.equal(gen.next().value, 0)
  t.equal(gen2.next().value, 0)
  t.equal(gen.next().value, 1)
  t.equal(gen2.next().value, 1)

  t.end()
})

test('generator takes argument', t => {
  const gen = testNarcNumber.searchGenerator()

  t.equal(gen.next().value, 0)
  t.equal(gen.next(2).value, 2)
  t.equal(gen.next(3).value, 3)
  t.equal(gen.next(150).value, 153)
  t.equal(gen.next(370).value, 370)
  t.equal(gen.next(371).value, 371)
  t.equal(gen.next().value, 407)

  t.end()
})
