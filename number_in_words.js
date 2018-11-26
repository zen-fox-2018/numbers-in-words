function numberToWords(number) {
  var kamus = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  var huruf = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
  var sehuruf = ['se', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
  
  var numberString = String(number)
  if (numberString.length === 0) {
    return ''
  }
  else if(numberString[0]== 1 && numberString.length < 3) {
    for (var i = 0; i < kamus.length; i++){
      if (numberString[1] == kamus[i]) {
        return sehuruf[i] + ' belas ' 
      }
    }
  }
  else {
    for (var i = 0; i < kamus.length; i++) {
      if (numberString[0] == kamus[i] && numberString.length < 2) {
        return huruf[i] + ' ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 3) {
        return sehuruf[i] + ' puluh ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 4) {
        return sehuruf[i] + ' ratus ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 5) {
        return sehuruf[i] + ' ribu ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 6) {
        return sehuruf[i] + ' puluh ribu ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 7) {
        return sehuruf[i] + ' ratus ribu ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 8) {
        return huruf[i] + ' juta ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 9) {
        return sehuruf[i] + ' puluh juta ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 10) {
        return sehuruf[i] + ' ratus juta ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 11) {
        return huruf[i] + ' miliar ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 12) {
        return sehuruf[i] + ' puluh miliar ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 13) {
        return sehuruf[i] + ' ratus miliar ' + numberToWords(numberString.slice(1))
      }
      if (numberString[0] == kamus[i] && numberString.length < 14) {
        return huruf[i] + ' triliun ' + numberToWords(numberString.slice(1))
      }
    }
    return numberToWords(numberString.slice(1))
  }
  
}




// Driver code
console.log(numberToWords(705));
console.log(numberToWords(25));
console.log(numberToWords(11));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
