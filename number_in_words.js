function numberToWords(number) {
  // Your code here
  var kamus = {1:'satu', 2:'dua', 3:'empat', 4:'empat', 5:'lima', 6:'enam', 7:'tujuh', 8:'delapan', 9:'sembilan'} 
  var numString = String(number)

  if(number === 0){
    return ''
  }
  if(number>=11000000000){
    return 'sebelas milyar ' + numberToWords(Number(numString.slice(2)))
  }

  if(number>=1000000000){
    return kamus[numString[0]]+' milyar ' + numberToWords(Number(numString.slice(1)))
  }

  if(number>=200000000){
    return kamus[numString[0]]+' ratus juta ' + numberToWords(Number(numString.slice(1)))
  }

  if(number>=100000000){
      return 'seratus juta ' + numberToWords(Number(numString.slice(1)))
    }

  if(number>=20000000){
    return kamus[numString[0]]+' puluh juta ' + numberToWords(Number(numString.slice(1)))
  }

  if(number >=11000000){
    return 'sebelas juta ' + numberToWords(Number(numString.slice(2)))
  }

  if(number>=10000000){
      return 'sepuluh juta ' + numberToWords(Number(numString.slice(1)))
    }


  if(number>=1000000){
    return kamus[numString[0]]+' juta ' + numberToWords(Number(numString.slice(1)))
  }

  if(number>=200000){
      return kamus[numString[0]]+' ratus ribu ' + numberToWords(Number(numString.slice(1)))
    }

  if(number>=100000){
  return 'seratus ribu ' + numberToWords(Number(numString.slice(1)))
  }

  if(number>=20000 ){
      return kamus[numString[0]]+' puluh ribu ' + numberToWords(Number(numString.slice(1)))
    }
  
  if(number >=11000 ){
      return 'sebelas ribu ' + numberToWords(Number(numString.slice(2)))
  }
  
  if(number >=10000 ){
    return 'sepuluh ribu ' + numberToWords(Number(numString.slice(1)))
  }

  if(number >=2000){
    return kamus[numString[0]]+' ribu ' + numberToWords(Number(numString.slice(1)))
  }

  if(number>999 && number<2000){
      return 'seribu ' + numberToWords(Number(numString.slice(1)))
  }
  
  if(number >=200){
      return kamus[numString[0]] + ' ratus ' + numberToWords(Number(numString.slice(1)))
  } 

  if(number >=100 && number <200){
      return 'seratus ' + numberToWords(Number(numString.slice(1)))
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
