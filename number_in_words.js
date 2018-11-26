function numberToWords(number) {
  let angka = ['', " satu", " dua", " tiga", " empat", " lima", " enam", " tujuh", " delapan", " sembilan", " sepuluh", " sebelas"]
  let num = String(number)

  if (number < 12) {
    return angka[number]
  } else if (number >= 12 && number < 20) {
    return numberToWords(number % 10) + " belas"
  } else if (number >= 20 && number < 100) {
    return numberToWords(Math.floor(number / 10)) + " puluh " + numberToWords(number % 10)
  } else if (number >= 100 && number < 1000) {
    if (num[0] === `1`) {
      return " seratus " + numberToWords(number % 100)
    }
    return numberToWords(Math.floor(number / 100)) + " ratus" + numberToWords(number % 100)
  } else if (number >= 1000 && number < 1000000) {
    if (num[0] === `1`) {
      return" seribu" + numberToWords(number % 1000)
    }
    return numberToWords(Math.floor(number / 1000)) + " ribu" + numberToWords(number % 1000)
  } else if (number >= 1000000 && number < 1000000000) {
    
    return numberToWords(Math.floor(number / 1000000)) + " juta" + numberToWords(number % 1000000)
  } else if (number >= 1000000000 && number < 1000000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + " miliar" + numberToWords(number % 1000000000)
  } else if (number >= 1000000000000 && number < 1000000000000000) {
    return numberToWords(Math.floor(number / 1000000000000)) + " triliun" + numberToWords(number %1000000000000)
  }

}

// Driver code
console.log(numberToWords(1000900000000));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(1115));
