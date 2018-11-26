
function ratusan (number) {
  // Your code here
  var kamus=['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']
  var angka=[1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  var str=String(number)
  if(str.length == 0) {
    return ''
  }
  else{
    for(var i=0; i<kamus.length; i++) {
      if(str[0] == angka[i]){
        if(str.length==3 && str[0]==1){
          return 'seratus ' + numberToWords(str.slice(1))
        }
        else if(number == 10) {
          return 'sepuluh'
        }else if(number == 11) {
          return 'sebelas'
        }
        else if(str.length == 3 && str[0]!=1) {
          return kamus[i] + ' ratus '+ numberToWords(str.slice(1))
        } 
        else if (str.length == 2 && number >19 && str[0] != 0){
          return kamus[i]+' puluh ' + numberToWords(str.slice(1))
        } 
        else if (str.length == 2 && str[0]==1 && str[0] != 0){
          for(var j=0; j<kamus.length; j++){
            if(str[1] == angka[j]){
              return kamus[j] + ' belas ' + numberToWords(str.slice(2))
            }
          }
        } 
        else if (str.length == 1 && str[0] != 0 ) {
          return kamus[i] +numberToWords(str.slice(1))
        }
      }
      else if (str[0] == 0) {
        return numberToWords(str.slice(1)) 
      }
    }
  }
}


function numberToWords(number) {
  // Your code here
  str=String(number)
  console.log(str.length , 'ini length')
  if(str.length <= 3){
  
    return ratusan(number)
  }
  else if (str.length <=6){
    if(str[0]==0 && str[1] == 0 && str[2] == 0){
      return numberToWords(String(number).slice(3))
    }
    else if(str.length%3 == 1 ){
      if(str[0]==1){
        return 'seribu ' + numberToWords(String(number).slice(1))
      }
      return ratusan(str[0]) + ' ribu ' + numberToWords(String(number).slice(1))
    }
    else if(str.length%3 == 0 ){
      return ratusan(str[0] + str[1] + str[2]) +' ribu ' + numberToWords(String(number).slice(3))
    }
    else if(str.length%3 == 2 ){
      return ratusan(str[0]+ str[1]) + ' ribu ' + numberToWords(String(number).slice(2))
    }
  }
  else if(str.length<=9){
    if(str[0]==0 && str[1] == 0 && str[2] == 0){
      return numberToWords(String(number).slice(3))
    }
    else if(str.length%3 == 1 ){
      return ratusan(str[0]) + ' juta ' + numberToWords(String(number).slice(1))
    }
    else if(str.length%3 == 0 ){
      return ratusan(str[0] + str[1] + str[2]) +' juta ' + numberToWords(String(number).slice(3))
    }
    else if(str.length%3 == 2 ){
      return ratusan(str[0]+ str[1]) + ' juta ' + numberToWords(String(number).slice(2))
    }
  }
  else if(str.length<=12){
    if(str[0]==0 && str[1] == 0 && str[2] == 0){
      return numberToWords(String(number).slice(3))
    }
    else if(str.length%3 == 1 ){
      return ratusan(str[0]) + ' milliar ' + numberToWords(String(number).slice(1))
    }
    else if(str.length%3 == 0 ){
      return ratusan(str[0] + str[1] + str[2]) +' milliar ' + numberToWords(String(number).slice(3))
    }
    else if(str.length%3 == 2 ){
      return ratusan(str[0]+ str[1]) + ' milliar ' + numberToWords(String(number).slice(2))
    }
  }
  else if(str.length<=15){
    if(str[0]==0 && str[1] == 0 && str[2] == 0){
      return numberToWords(String(number).slice(3))
    }
    else if(str.length%3 == 1 ){
      return ratusan(str[0]) + ' trilliun ' + numberToWords(String(number).slice(1))
    }
    else if(str.length%3 == 0 ){
      return ratusan(str[0] + str[1] + str[2]) +' trilliun ' + numberToWords(String(number).slice(3))
    }
    else if(str.length%3 == 2 ){
      return ratusan(str[0]+ str[1]) + ' trilliun ' + numberToWords(String(number).slice(2))
    }
  }
}

// Driver code
console.log(numberToWords(120));
 console.log(numberToWords(100001));
 console.log(numberToWords(99999099991911));
