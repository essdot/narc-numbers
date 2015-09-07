'use strict';

var marked0$0 = [searchGenerator].map(regeneratorRuntime.mark);
module.exports = testNarcNumber;
module.exports.searchGenerator = searchGenerator;

function testNarcNumber(n) {
  n = Math.abs(Number(n));

  var digits = getDigits(n);
  var sum = digits.reduce(function (prev, current) {
    return prev + Math.pow(current, 3);
  }, 0);

  if (!isFinite(n) || !isFinite(sum)) {
    return false;
  }

  return sum === n;
}

function getDigits(n) {
  return n.toFixed(0).split('').map(Number);
}

function searchGenerator(arg) {
  var i, startAt;
  return regeneratorRuntime.wrap(function searchGenerator$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = 2;
        startAt = undefined;

      case 2:
        if (!true) {
          context$1$0.next = 10;
          break;
        }

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
          i = startAt;
          startAt = null;
        } else {
          i++;
        }
        context$1$0.next = 2;
        break;

      case 10:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}