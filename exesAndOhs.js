function XO (str) {
  var xNum = 0
  var oNum = 0
  const upperStr = str.toUpperCase()

  for (var i = 0; i < upperStr.length; i++) {
    if (upperStr[i] === 'X') {
      xNum += 1
    } else if (upperStr[i] === 'O') {
      oNum += 1
    }
  }
  return xNum === oNum
}

console.log(XO('ooxx'))  // true
console.log(XO('xooxx')) // false
console.log(XO('ooxXm')) // true
console.log(XO('zpzpzpp')) // true when no 'x' and 'o' is present should return true
console.log(XO('zzoo')) // false
