function numberToWords(number) {
  let kamus = {
    sebelas: 11,
    sepuluh: 10,
    sembilan: 9,
    delapan: 8,
    tujuh: 7,
    enam: 6,
    lima: 5,
    empat: 4,
    tiga: 3,
    dua: 2,
    satu: 1
  }

  if(number == 0) {
    return ' '
  }

  for(i in kamus) {
    if(number <= 11 && number == kamus[i] ) {
      return i
    } else if( number > 11 && number < 21 ) {
      return numberToWords(number-10) + ' belas' 
    } else if( number >= 21 && number <= 99 ){
      return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
    } else if ( number > 99 && number < 200) {
      return 'seratus ' + numberToWords(number % 100)
    } else if (number >= 200 && number < 1000){
      return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100)
    } else if ( number >= 1000 && number < 2000) {
      return 'seribu ' + numberToWords(number % 1000)
    } else if ( number >= 2000 && number < 1000000) {
      return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
    } else if (number >= 1000000 && number < 1000000000) {
      return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
    } else if( number >=1000000000 && number < 1000000000000) {
      return numberToWords(Math.floor(number / 1000000000 )) + ' miliyar ' + numberToWords(number % 1000000000)
    } else if (number >= 1000000000000){
      return numberToWords(Math.floor(number / 1000000000000 )) + ' triliun ' + numberToWords(number % 1000000000000)
    }
  }
}

// Driver code
console.log(numberToWords(31000));
console.log(numberToWords(10300));
console.log(numberToWords(705));
console.log(numberToWords(11000000));
console.log(numberToWords(11099000));
console.log(numberToWords(2011845));
console.log(numberToWords(1000000000000));
