function numberToWords(number) {
  let words = {
    sebelas:11,
    sepuluh:10,
    sembilan:9,
    delapan:8,
    tujuh:7,
    enam:6,
    lima:5,
    empat:4,
    tiga:3,
    dua:2,
    satu:1
  }

  if ( number === 0) {
    return ""
  }
  for(i in words){
    if (number <= 11 && number === words[i]) {
     return i + numberToWords(number-words[i])
    } else if (number >11 && number <= 19) {
      return numberToWords(number%10) + " belas"
    } else if (number >= 20 && number <= 99) {
      return numberToWords(Math.floor(number / 10)) + " puluh " + numberToWords(Math.floor(number % 10))
    } else if ( number >= 100 &&  number < 200) {
      return "seratus " + numberToWords(number % 100)
    } else if (number >= 200 && number <= 999) {
      return numberToWords(Math.floor(number / 100)) + " ratus " + numberToWords(number % 100)
    } else if (number >= 1000 && number < 2000) {
      return "seribu " + numberToWords(number % 1000)
    } else if (number >= 2000 && number <= 999999) {
      return numberToWords(Math.floor(number / 1000)) + " ribu " + numberToWords(number % 1000)
    } else if (number >= 1000000 && number < 1000000000) {
      return numberToWords(Math.floor(number / 1000000)) + " juta " +numberToWords(number % 1000000)
    } else if (number >= 1000000000 && number < 1000000000000) {
      return numberToWords(Math.floor(number / 1000000000)) + " miliar " + numberToWords(number % 1000000000)
    } else if (number >= 1000000000000 && number < 1000000000000000) {
      return numberToWords(Math.floor(number / 1000000000000)) + " triliun " + numberToWords(number % 1000000000000)
    }

  }
  // Your code here
}

// Driver code
console.log(numberToWords(4))
console.log(`=======================`)
console.log(numberToWords(27))
console.log(`=======================`)
console.log(numberToWords(102))
console.log(`=======================`)
console.log(numberToWords(38079))
console.log(`=======================`)
console.log(numberToWords(82102713))
console.log(`=======================`)
console.log(numberToWords(705));
console.log(`=======================`)
console.log(numberToWords(1000000));
console.log(`=======================`)
console.log(numberToWords(2011845));
console.log(`=======================`)
console.log(numberToWords(999999999999999))
