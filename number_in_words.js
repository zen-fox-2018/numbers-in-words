function numberToWords(number) {
  // Your code here
  let toString = number + '';
  let numeric = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];

  if (number === 0) {
    return ''
  } else {
    if (number >= 1 && number <= 9) {
      return numeric[number - 1]
    } else if (number >= 10 && number <= 19) {
      // console.log(toString[1])
      if (toString[1] == 0) {
        return 'sepuluh'
      } else if (toString[1] == 1) {
        return 'sebelas'
      } else {
        return numeric[toString[1] - 1] + ' belas'
      }
    } else if (number >= 20 && number <= 99) {
      return numeric[toString[0] - 1] + ' puluh ' + numberToWords(number - (toString[0] * 10))
    } else if (number >= 100 && number <= 999) {
      if (number >= 100 && number <= 199) {
        return 'seratus ' + numberToWords(number - (toString[0] * 100))
      } else {
        return numeric[toString[0] - 1] + ' ratus ' + numberToWords(number - (toString[0] * 100))
      }
    } else if (number >= 1000 && number <= 9999) {
      if (number >= 1000 && number <= 1999) {
        return 'seribu ' + numberToWords(number - (toString[0] * 1000))
      } else {
        return numeric[toString[0] - 1] + ' ribu ' + numberToWords(number - (toString[0] * 1000))
      }
    } else if (number >= 10000 && number <= 999999) {
      return numberToWords((number - (number % 1000)) / 1000) + ' ribu ' + numberToWords(number % 1000)
    } else if (number >= 1000000 && number <= 999999999) {
      return numberToWords((number - (number % 1000000)) / 1000000) + ' juta ' + numberToWords(number % 1000000)
    } else if (number >= 1000000000 && number <= 999999999999) {
      return numberToWords((number - (number % 1000000000)) / 1000000000) + ' milyar ' + numberToWords(number % 1000000000)
    } else if (number >= 1000000000000 && number <= 999999999999999) {
      return numberToWords((number - (number % 1000000000000)) / 1000000000000) + ' triliun ' + numberToWords(number % 1000000000000)
    }
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
