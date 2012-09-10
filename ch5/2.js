function printBinary(decimalStr) {
  var integerPart = decimalStr.substring(0, decimalStr.indexOf('.'));
  var fractionPart = decimalStr.substring(decimalStr.indexOf('.'));

  var binaryStr = '';

  var integer = parseInt(integerPart, 10);
  while (integer > 0) {
    binaryStr = (integer & 1) + binaryStr;
    integer >>= 1;
  }

  binaryStr += '.';
  
  var fraction = parseFloat(fractionPart);
  var place = -1;
  while (fraction > 0) {
    if (place < -31) {
      console.log("ERROR");
      return;
    }

    var curVal = Math.pow(2, place);
    if (fraction/curVal >= 1) {
      binaryStr += '1';
      fraction -= curVal;
    } else {
      binaryStr += '0';
    }
    place--;
  }
  
  console.log(decimalStr + ' -> ' + binaryStr);
}

printBinary('3.1875');
printBinary('3.25');
printBinary('3.75');
