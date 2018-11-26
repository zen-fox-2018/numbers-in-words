function numberToWords(number) {
  var numStr = number.toString()
  var angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var numWords = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']   

  if (number === 0) {
    return ''
  }
  else {
    for (let i = 0; i < angka.length; i++) {
      if (numStr[0] === '1' && numStr[1] === '1' && Number(numStr) < 20) {
        return 'sebelas' + numberToWords(Number(numStr.substring(2)))
      }
      else if (Number(numStr[0]) === angka[i] && Number(numStr) < 10) {
        return numWords[i] + numberToWords(Number(numStr.substring(1)))
      }
      else if (Number(numStr[1]) === angka[i] && Number(numStr) > 11 && Number(numStr) < 20) {
        return numWords[i] + ' belas' + numberToWords(Number(numStr.substring(2)))
      }
      else if (Number(numStr[0]) === angka[i] && Number(numStr) > 20 && Number(numStr) < 100) {
        return numWords[i] + ' puluh' + ' ' + numberToWords(Number(numStr.substring(1)))
      }
      else if (Number(numStr[0]) === angka[i] && Number(numStr) > 100 && Number(numStr) < 1000) {
        return numWords[i] + ' ratus' + ' ' + numberToWords(Number(numStr.substring(1)))
      }
      else if (Number(numStr[0]) === angka[i] && Number(numStr) > 1000 && Number(numStr) < 10000) {
        return numWords[i] + ' ribu' + ' ' + numberToWords(Number(numStr.substring(1)))
      }
      else if (Number(numStr[1]) === angka[i] && Number(numStr) > 10000 && Number(numStr) < 20000) {
        if (numStr[0] === '1' && numStr[1] === '1') {
          return 'sebelas ribu' + ' ' + numberToWords(Number(numStr.substring(2)))
        }
        else {
          return numWords[i] + ' belas ribu' + ' ' + numberToWords(Number(numStr.substring(2)))
        }
      }
      else if (Number(numStr[0]) === angka[i] && Number(numStr) > 20000 && Number(numStr) < 100000) {
        if (Number(numStr[0]) === angka[i]) {
          return numWords[i] + ' puluh ' + numWords[Number(numStr[1])] + ' ribu ' + numberToWords(Number(numStr.substring(2)))
        }
      }
      else if (Number(numStr[0]) === angka[i] && Number(numStr) > 100000 && Number(numStr) < 1000000) {
        if (Number(numStr) % 100000 === 0) {
          return numWords[i] + ' ratus ribu' + ' ' + numberToWords(Number(numStr.substring(1)))
        }
        else {
          return numWords[i] + ' ratus' + ' ' + numberToWords(Number(numStr.substring(1)))
        }
      }
      else if (Number(numStr[0]) === angka[i] && Number(numStr) > 1000000 && Number(numStr) < 10000000) {
        return numWords[i] + ' juta' + ' ' + numberToWords(Number(numStr.substring(1)))
      }
      else if (Number(numStr[0]) === angka[i] && Number(numStr) > 10000000 && Number(numStr) < 100000000) {
        if (numStr[0] === '1' && numStr[1] === '1') {
          return 'sebelas juta' + ' ' + numberToWords(Number(numStr.substring(2)))  
        }
        else if (numStr[0] === '1') {
          return numWords[i] + ' belas juta' + ' ' + numberToWords(Number(numStr.substring(2)))  
        }
        else {
          return numWords[i] + ' puluh ' + numWords[Number(numStr[1])] + ' juta ' + numberToWords(Number(numStr.substring(2)))
        }
      }
      else if (Number(numStr[0]) === angka[i] && Number(numStr) > 100000000 && Number(numStr) < 10000000000) {
        return numWords[i] + ' ratus juta ' + numberToWords(Number(numStr.substring(1)))
      }
    }
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000));
console.log(numberToWords(51000));
console.log(numberToWords(11909))
console.log(numberToWords(21000))
console.log(numberToWords(46350000))
console.log(numberToWords(206500001))
console.log(numberToWords(999))
console.log(numberToWords(2011845));
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(107));
console.log(numberToWords(82102713))