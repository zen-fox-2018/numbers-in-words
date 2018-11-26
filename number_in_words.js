function numberToWords(number) {
  // Your code here
  
  var angka = [2,3,4,5,6,7,8,9]
  var kamus = {1:'satu', 2:'dua', 3:'empat', 4:'empat', 5:'lima', 6:'enam', 7:'tujuh', 8:'delapan', 9:'sembilan'} 
  var katapuluh = ['sepuluh','sebelas', 'seratus', 'seribu']
  var imbuhan = ['belas', 'puluh', 'ratus']
  var numString = String(number)

  if(number === 0){
    return ''
  }
  if(number===11000000000){
    return 'sebelas milyar ' + numberToWords(Number(numString.slice(2)))
  }

  if(number>=1000000000){
    return kamus[numString[0]]+' milyar ' + numberToWords(Number(numString.slice(1)))
  }

  if(number>=100000000){
    return kamus[numString[0]]+' ratus juta ' + numberToWords(Number(numString.slice(1)))
  }

  if(number>10000000){
    return kamus[numString[0]]+' puluh juta ' + numberToWords(Number(numString.slice(1)))
  }

  if(number===1000000){
    return 'sepuluh juta ' + numberToWords(Number(numString.slice(1)))
  }
  
  if(number >=11000000){
    return 'sebelas juta ' + numberToWords(Number(numString.slice(2)))
  }

  if(number>=1000000){
    return kamus[numString[0]]+' juta ' + numberToWords(Number(numString.slice(1)))
  }
  
  if(number>999 && number<2000){
    return 'seribu ' + numberToWords(Number(numString.slice(1)))
  }

  if(number >=11000 ){
    return 'sebelas ribu ' + numberToWords(Number(numString.slice(2)))
  }

  if(number >=2000 && number <11000 && number>11000){
    return kamus[numString[0]]+' ribu ' + numberToWords(Number(numString.slice(1)))
  }

  if(number >=100 && number <200){
    return 'seratus ' + numberToWords(Number(numString.slice(1)))
  }
  if(number >= 200){
      return kamus[numString[0]] + ' ratus ' + numberToWords(Number(numString.slice(1)))
  }  
  if (number > 20){
      return kamus[numString[0]] + ' puluh ' +numberToWords(Number(numString.slice(1)))
    }

  if(number >11 && number< 20){
    return kamus[numString[1]] + ' belas'
  }
  if(number ===11 ){
    return 'sebelas '
  }
  if(number === 10){
    return 'sepuluh'
  }
  if(number >=1){
    return kamus[numString[0]]
  }

  }


// Driver code
console.log(numberToWords(99));
console.log(numberToWords(927));
console.log(numberToWords(200));
console.log(numberToWords(100));
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

console.log(numberToWords(1100057));