
function numberToWords(number) {

  let listOfNumbers = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
  // console.log(number, "<========")
  
  if(number < 12) {
    return listOfNumbers[number];
  } else if (number < 20) {
    return `${numberToWords(number%10)} belas`;
  } else if(number < 100) {
    return `${listOfNumbers[Math.floor(number/10)]} puluh ${listOfNumbers[number%10]}`;
  } else if (number === 100) {
    return "seratus";
  } else if (number < 200) {
    return `seratus ${numberToWords(number%100)}`;
  } else if (number < 1000) {
    return `${numberToWords(Math.floor(number/100))} ratus ${numberToWords(number%100)}`;
  } else if (number === 1000000) {
    return "satu juta";
  } else if (number < 1000000) {
    return `${numberToWords(Math.floor(number/1000))} ribu ${numberToWords(number%1000)}`;
  } else if (number < 1000000000) {
    return `${numberToWords(Math.floor(number/1000000))} juta ${numberToWords(number%1000000)}`;
  } else if (number === 1000000000) {
    return "satu milyar";
  } else if (number < 1000000000000) {
    return `${numberToWords(Math.floor(number/1000000000))} milyar ${numberToWords(number%1000000000)}`;
  } else if (number === 1000000000000) {
    return "satu trilyun";
  } else if(number < 1000000000000000) {
    return `${numberToWords(Math.floor(number/1000000000000))} triliun ${numberToWords(number%1000000000000)}`;
  }
}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(19));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(705));
console.log(numberToWords(999));
console.log(numberToWords(38079));
console.log(numberToWords(99999));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(82102713));
console.log(numberToWords(999999999));
console.log(numberToWords(1000000000));
console.log(numberToWords(999999999999999));

//1000000000000 <--- trillion
//1000000000000000 <--- quadrillion
