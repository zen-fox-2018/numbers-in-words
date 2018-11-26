function numToWords(number) {
  // Your code here
  
  if (number == 0){
    return ""
  }else {
    var temp = 1
    var num = ""
    if (number.toString()[0] == 0){
      return numToWords(number.toString().slice(1))
    } else if (number.toString()[0] == 1){ 
        if(number.toString().length == 2 || number.toString().slice(2).length % 3 == 0){
          if (number.toString()[1]  == 1){
            num = "se"
          } else if (number.toString()[1]  == 2){
            num = "dua"
          } else if (number.toString()[1]  == 3){
            num = "tiga"
          } else if (number.toString()[1]  == 4){
            num = "empat"
          } else if (number.toString()[1]  == 5){
            num = "lima"
          } else if (number.toString()[1]  == 6){
            num = "enam"
          } else if (number.toString()[1]  == 7){
            num = "tujuh"
          } else if (number.toString()[1]  == 8){
            num = "delapan"
          } else if (number.toString()[1]  == 9){
            num = "sembilan"
          }
          if (num != "se"){
            num += " "
          }
          num += "belas"
          temp = 2
        }else if(number.toString().slice(2).length % 3 == 0 || number.toString().slice(3).length % 3 == 0 ){
          num = "se"
        }else{
          num = "satu" 
        }
    } else if (number.toString()[0]  == 2){
      num = "dua"
    } else if (number.toString()[0]  == 3){
      num = "tiga"
    } else if (number.toString()[0]  == 4){
      num = "empat"
    } else if (number.toString()[0]  == 5){
      num = "lima"
    } else if (number.toString()[0]  == 6){
      num = "enam"
    } else if (number.toString()[0]  == 7){
      num = "tujuh"
    } else if (number.toString()[0]  == 8){
      num = "delapan"
    } else if (number.toString()[0]  == 9){
      num = "sembilan"
    }

    if(temp == 1){
      if (number.toString().length == 2 || number.toString().slice(2).length == 3 || number.toString().slice(2).length  == 6 || number.toString().slice(2).length == 9 || number.toString().slice(2).length == 12 || number.toString().slice(2).length== 15 ){
        if (num != "se"){
          num += " "
        }
        num += "puluh"
        if(number.toString()[1] != 0 ){
          return num + " " + numToWords(number.toString().slice(temp))
        }
      } else if (number.toString().length == 3 || number.toString().slice(3).length == 3 || number.toString().slice(3).length  == 6 || number.toString().slice(3).length == 9 || number.toString().slice(3).length == 12 || number.toString().slice(3).length== 15){
        if (num != "se"){
          num += " "
        }
        num += "ratus"
      } 
    }
  
    if (number.toString().slice(1).length == 3 ||  number.toString().slice(2).length == 3){
      num += " ribu"
    } else if (number.toString().slice(1).length == 6 || number.toString().slice(2).length == 6 || number.toString().slice(3).length == 6){
      num += " juta"
    } else if (number.toString().slice(1).length == 9 || number.toString().slice(2).length == 9 || number.toString().slice(3).length == 9){
      num += " milyar"
    } else if (number.toString().slice(1).length == 12 || number.toString().slice(2).length == 12 || number.toString().slice(3).length == 12){
      num += " trilyun"
    } 
    return num + ' '+ numToWords(number.toString().slice(temp))
  }
}

// Driver code
console.log(numToWords(705));
console.log(numToWords(1000000));
console.log(numToWords(2011845));
console.log(numToWords(38079));
console.log(numToWords(82102713));
console.log(numToWords(123456));


