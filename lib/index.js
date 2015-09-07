'use strict';

var marked0$0 = [searchGenerator].map(regeneratorRuntime.mark);
module.exports = testNarcNumber;
module.exports.searchGenerator = searchGenerator;

function testNarcNumber(_n) {
  var n = sanitize(_n);
  var digits = getDigits(n);
  var digitsSum = raiseToLength(digits).reduce(function (a, b) {
    return a + b;
  }, 0);

  return isFinite(n) && isFinite(digitsSum) && digitsSum === n;
}

function searchGenerator(arg) {
  var i, startAt;
  return regeneratorRuntime.wrap(function searchGenerator$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = 0;

      case 1:
        if (!true) {
          context$1$0.next = 10;
          break;
        }

        startAt = null;

        if (!testNarcNumber(i)) {
          context$1$0.next = 7;
          break;
        }

        context$1$0.next = 6;
        return i;

      case 6:
        startAt = context$1$0.sent;

      case 7:

        if (typeof startAt === 'number') {
          i = sanitize(startAt);
        } else {
          i++;
        }
        context$1$0.next = 1;
        break;

      case 10:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

function getDigits(n) {
  return n.toFixed(0).split('').map(Number);
}

function raiseToLength(arr) {
  return arr.map(function (el) {
    return Math.pow(el, arr.length);
  });
}

function sanitize(n) {
  return Math.abs(Number(n));
}