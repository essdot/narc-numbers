module.exports = testNarcNumber
module.exports.searchGenerator = searchGenerator

function testNarcNumber (n) {
  n = Math.abs(Number(n))

  const digits = getDigits(n)
  const sum = digits.reduce((prev, current) => {
    return prev + Math.pow(current, 3)
  }, 0)

  if (!isFinite(n) || !isFinite(sum)) {
    return false
  }

  return sum === n
}

function getDigits (n) {
  return n.toFixed(0).split('').map(Number)
}

function * searchGenerator (arg) {
  let i = 2
  let startAt

  while (true) {
    if (testNarcNumber(i)) {
      startAt = yield i
    }

    if (typeof startAt === 'number') {
      i = startAt
      startAt = null
    } else {
      i++
    }
  }
}
