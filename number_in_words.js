function numberToWords(number) {
  let num = String(number)
  let word = [` `, `satu`, `dua`, `tiga`, `empat`, `lima`, `enam`, `tujuh`, `delapan`, `sembilan`, `sepuluh`, `sebelas`]

  if (number < 12) {
    return word[number]
  } else if (number < 20) {
    return numberToWords(Math.floor(number / 10)) + ` belas `+ numberToWords(number % 10)
  } else if (number < 100) {
    return numberToWords(Math.floor(number / 10)) + ` puluh ` + numberToWords(number % 10)
  } else if (number < 1000) {
    return numberToWords(Math.floor(number / 100)) + ` ratus ` + numberToWords(number % 100)
  } else if (number < 1000000) {
    return numberToWords(Math.floor(number / 1000)) + ` ribu ` + numberToWords(number % 1000)
  } else if (number < 10000000) {
    return numberToWords(Math.floor(number / 1000000)) + ` juta ` + numberToWords(number % 1000000)
  } else if (number < 10000000000) {
    return numberToWords(Math.floor(number / 100000000)) + ` ratus  ` + numberToWords(number % 100000000)
  } else if (number < 1000000000000) {
    return numberToWords(Math.floor(number / 10000000000)) + ` miliar ` + numberToWords(number % 10000000000)
  } else if (number < 10000000000000) {
    return numberToWords(Math.floor(number / 100000000000)) + ` triliun ` + numberToWords(number % 100000000000)
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
