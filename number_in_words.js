function numberToWords(number) {
  // Your code here
  var output = ''

  var angka = [0,1,2,3,4,5,6,7,8,9]
  var huruf = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']
  var angkaSpecial = [10,11,100,1000]
  var hurufSpecial = ['sepuluh','sebelas','seratus','seribu']

  

  for (let i = 0; i < angka.length; i++) {

    if(String(number).length == 1){
      
      if (angka[i] == number) {
        output = huruf[i]
      }

    } else if (String(number).length == 2 && String(number)[0] == 1) {
      
      if (angka[i] == +(String(number)[1])) {
        
        output = `${huruf[i]} belas `

      }

    } else if (String(number).length == 2 && String(number)[0] !== 1) {
      
      if (angka[i] == +(String(number)[0])) {
        
        output = `${huruf[i]} puluh ${numberToWords(+(String(number).slice(1)))}`

      }

    } else if (String(number).length == 3){
      
      if (angka[i] == +(String(number)[0])) {
        
        output = `${huruf[i]} ratus ${numberToWords(+(String(number).slice(1)))}`

      }

    } else if (String(number).length == 4){
      
      if (angka[i] == +(String(number)[0])) {
        
        output = `${huruf[i]} ribu ${numberToWords(+(String(number).slice(1)))}`

      }

    }


    // if(input.length == 1) {
    //   if (input[0] == angka[i]) {
    //     return huruf[i] + numberToWords(+input.slice(1))
    //   }
    // }
    
  }

  

  // var pecah = ['belas','puluh','ratus','ribu','juta']

  // if(number>=1 && number<=11) {
  //   return huruf[number]
  // } else if (number>=12 && number<=19){
  //   return huruf[input[1]] + ' belas'
  // } else if (number>=20 && number<=99){
  //   return huruf[input[0]] + ' puluh ' + huruf[input[1]]
  // } else if (number == 100){
  //   return 'seratus'
  // } else if (number>=101 && number<=109){
  //   return 'seratus ' + huruf[input[1]] + huruf[input[2]]
  // } else if (number == 110) {
  //   return 'seratus sepuluh'
  // } else if (number == 111) {
  //   return 'seratus sebelas'
  // } else if (number >=112 && number<=119) {
  //   return 'seratus ' + huruf[input[2]] + ' belas' 
  // } else if (number >=120 && number<=199) {
  //   return 'seratus ' + huruf[input[1]] + ' puluh ' +  huruf[input[2]]
  // } else if (number >=200 && number<=999) {
  //   return huruf[input[0]] + ' ratus ' + huruf[input[1]] + ' puluh ' +  huruf[input[2]]
  // }

  
  return output
}

// Driver code
console.log(numberToWords(200));
console.log(numberToWords(5));
console.log(numberToWords(99));
console.log(numberToWords(19));
console.log(numberToWords(705));
console.log(numberToWords(7051));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));


/**
 cek length 
 length 1 = satuan
 length 2 = satuan belasan dan puluhan
 length 3 = ratusan
 length 4 = ribuan
        
 */
