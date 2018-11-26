function numberToWords(number) {
  var terbilang = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  if(number > 999999999999999){
    return 'masukkan angka 1 - 999999999999999';
  }

  if(number === 0) {
    return '';
  } else if(number < 10) {
    return terbilang[number - 1];
  } else {
    if(number >= 11 && number < 20) {
      if(number % 10 === 1){
        return 'sebelas';
      } else {
        return numberToWords(number % 10) + ' belas';
      }
    } else if(number >=10 && number < 100) {
      if(Math.floor(number / 10) === 1){
        return 'sepuluh';
      } else {
        return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10);
      }
    } else if(number >= 100 && number < 1000){
      if(Math.floor(number / 100) === 1){
        return 'seratus ' + numberToWords(number % 100);
      } else {
        return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100);
      }
    } else if(number >= 1000 && number < 1000000){
      if(Math.floor(number / 1000) === 1){
        return 'seribu ' + numberToWords(number % 1000);
      } else {
        return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000);
      }
    } else if(number >= 1000000 && number < 1000000000){
        return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000);
    } else if(number >= 1000000000 && number < 1000000000000){
        return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(number % 1000000000);
    } else if(number >1000000000000){
        return numberToWords(Math.floor(number / 1000000000000)) + ' trilyun ' + numberToWords(number % 1000000000000);
    }
  }
}

console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
