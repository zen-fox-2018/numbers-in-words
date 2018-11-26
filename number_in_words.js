function stringInator(numString){
  switch (numString) {
    case '1':
      return 'satu';
    case '2':
      return 'dua';
    case '3' :
      return 'tiga';
    case '4':
      return 'empat';
    case '5':
      return 'lima';
    case '6' :
      return 'enam';
    case '7':
      return 'tujuh';
    case '8':
      return 'delapan';
    case '9':
      return 'sembilan';
  }
}

//function mengembalikan string ratusan
function threeDigits(number){
    var numString = String(number);
    var result = '';
    if (numString.length === 3){
      //ratusan
      if (numString[0] == '1'){
        result = result + 'seratus';
      }
      else{
        result = result + stringInator(numString[0]) + ' ratus';
      }
      //puluhan
      if (numString[1]+numString[2] == '10'){
        result = result + ' sepuluh';
      }
      else if (numString[1]+numString[2] == '11') {
        result = result + ' sebelas ';
      }
      else if (numString[1] == '1'){
        result = result + ' ' + stringInator(numString[2]) + ' belas';
      }
      else {
        if (numString[1] == '0'){
          result = result + ' '+ stringInator(numString[2]);
        }
        else {
          result = result + ' ' + stringInator(numString[1]) + ' puluh ' + stringInator(numString[2]);
        }
      }
    }
    else if (numString.length === 2) {
      //puluhan
      if (numString[0]+numString[1] == '10'){
        result = result + 'sepuluh';
      }
      else if (numString[0]+numString[1] == '11') {
        result = result + 'sebelas';
      }
      else if (numString[0] == '1'){
        result = result + stringInator(numString[1]) + ' belas';
      }
      else {
        if (numString[0] == '0'){
          result = result + stringInator(numString[1]);
        }
        else {
          result = result + stringInator(numString[0]) + ' puluh ' + stringInator(numString[1]);
        }
      }
    }
    else if (numString.length === 1){
      result = result + stringInator(numString[0]);
    }
    return result;
  }

function numberToWords(number) {
  // Your code here
  var numString = String(number);
  var arr = [];
  if (number=== 0) {
    return '';
  }
  else if (numString.length === 0) {
    return '';
  }
  else if (numString.length <= 3) {
    return threeDigits(Number(numString));
  }
  else{
    var tampung = '';
    for (i = numString.length-1; i >= 0; i=i-3){
      if (i < 2){
        i = 0;
      }
      else{
        tampung += numString[i-2]+numString[i-1]+numString[i];
        arr.push(tampung);
        tampung = '';
      }
    }
    if (numString.length%3 === 2){
      arr.push(numString[0]+numString[1]);
    }
    else if(numString.length % 3 ===1){
      arr.push(numString[0]);
    }

    //recursive
    if (arr.length === 5) {
      return threeDigits(Number(arr[arr.length-1])) + ' triliun ' + numberToWords(Number(arr[3]+arr[2]+arr[1]+arr[0]));
    }
    if (arr.length === 4) {
      return threeDigits(Number(arr[arr.length-1])) + ' miliar ' + numberToWords(Number(arr[2]+arr[1]+arr[0]));
    }
    if (arr.length === 3) {
      return threeDigits(Number(arr[arr.length-1])) + ' juta ' + numberToWords(Number(arr[1]+arr[0]));
    }
    if (arr.length === 2) {
      return threeDigits(Number(arr[arr.length-1])) + ' ribu ' + numberToWords(Number(arr[0]));
    }
    if (arr.length === 1) {
      return threeDigits(Number(arr[arr.length-1]));
    }
    if (arr.length === 0) {
      return '';
    }
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
