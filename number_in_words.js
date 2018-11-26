function ribuanJutaan(length){
  if (length == 3){
    return ' ribu '
  } else if (length == 6){
    return ' juta '
  } else if (length == 9){
    return ' miliar '
  } else if (length == 12){
    return ' triliun '
  } else {
    return ''
  }
}

function numberToWords(number) {
  // Your code here
  let angka = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let angkaTrans = [ 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']

  if (number === 0){
    return ''
  } else {
    let str = String(number)
    let length = str.slice(1).length
    let tigaDigit = ''

    if (length == 3 || length == 6 || length == 9 || length == 12){
      tigaDigit = ribuanJutaan(length)
    }

    if(number < 10){
      return angkaTrans[angka.indexOf(number)] + ' ' + numberToWords(+str.slice(1))
    }

    if (str[0] == 0){
      return '' + numberToWords(+str.slice(1))
    }

    if ((str.length - 2) % 3 === 0){

        if (str[0] == 1){
          if (str[1] == 0){
            tigaDigit = ribuanJutaan(str.slice(2).length)
            return ' sepuluh ' + tigaDigit + numberToWords(+str.slice(2))
          } else if (str[1] == 1){
            tigaDigit = ribuanJutaan(str.slice(2).length)
            return ' sebelas ' + tigaDigit + numberToWords(+str.slice(2))
          } else {
            return angkaTrans[angka.indexOf(+str[1])] + ' belas ' + tigaDigit + numberToWords(+str.slice(2))
          }
        } else {
          return angkaTrans[angka.indexOf(+str[0])] + ' puluh '  + tigaDigit + numberToWords(+str.slice(1))
        }
    }

    if (str.length % 3 === 0){
      if (str[0] == 1){
        return 'seratus ' + tigaDigit + numberToWords(+str.slice(1))
      } else {
        return angkaTrans[angka.indexOf(+str[0])] + ' ratus '  + tigaDigit + numberToWords(+str.slice(1))
      }
    }

    if (str.length % 3 == 1){
      if (str[0] == 1){
        if (tigaDigit === ' ribu '){
          return 'seribu ' + numberToWords(+str.slice(1))
        } else {
          return angkaTrans[angka.indexOf(+str[0])] + tigaDigit + numberToWords(+str.slice(1))
        }
      } else {
        return angkaTrans[angka.indexOf(+str[0])] + tigaDigit + numberToWords(+str.slice(1))
      }
    }
    // console.log(str.length - 2 % 3 === 0)


  }
}

// Driver code
// console.log(numberToWords(2));
// console.log(numberToWords(705));
// console.log(numberToWords(123));
// console.log(numberToWords(1230));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));
console.log(numberToWords(999999999999999))
