module.exports = testNarcNumber
module.exports.searchGenerator = searchGenerator

function testNarcNumber (_n) {
  const n = sanitize(_n)
  const digits = getDigits(n)
  const digitsSum = raiseToLength(digits).reduce((a, b) => a + b, 0)

  return isFinite(n) && isFinite(digitsSum) && digitsSum === n
}

function * searchGenerator (arg) {
  let i = 0

  while (true) {
    let startAt = null

    if (testNarcNumber(i)) {
      startAt = yield i
    }

    if (typeof startAt === 'number') {
      i = sanitize(startAt)
    } else {
      i++
    }
  }
}

function getDigits (n) {
  return n.toFixed(0).split('').map(Number)
}

function raiseToLength (arr) {
  return arr.map(el => Math.pow(el, arr.length))
}

function sanitize (n) {
  return Math.abs(Number(n))
}
