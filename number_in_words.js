function numberToWords(num) {
  console.log(num);

  var kamusAngkaStr = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  var kamusAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var numStr = num.toString();

  if (num.length == 0) {
    return '';
  }

  for (var i = 0; i < kamusAngka.length; i++) {
    // console.log(numStr[0], numStr[1]);
    if (numStr[0] == 1 && numStr.length > 1) {
      var temp = 'se';
    } else {
      temp = kamusAngkaStr[i] + ' ';
    }

    if (numStr.length > 4 && numStr.length < 7) {
      var pecahan = numStr.slice(0, -3);
      console.log(pecahan);
    } else if (numStr.length >= 7 && numStr.length < 10) {
      pecahan = numStr.slice(0, -6);
    } else if (numStr.length >= 10 && numStr.length < 13) {
      pecahan = numStr.slice(0, -9);
    } else if (numStr.length >= 13 && numStr.length < 16) {
      pecahan = numStr.slice(0, -12);
    } else {
      pecahan = numStr;
    }

    if (pecahan.length == 4 && numStr[0] == kamusAngka[i]) {
      return temp + 'ribu ' + numberToWords(numStr.substring(1));
    } else if (pecahan.length == 3 && numStr[0] == kamusAngka[i]) {
      return temp + 'ratus ' + numberToWords(numStr.substring(1));
    } else if (pecahan.length == 2 && numStr[0] == kamusAngka[i] && Number(pecahan) >= 20) {
      return temp + 'puluh ' + numberToWords(numStr.substring(1));
    } else if (pecahan.length == 2 && numStr[1] == kamusAngka[i] && Number(pecahan) < 20) {
      if (numStr[1] == 1) {
        return 'sebelas ' + numberToWords(numStr.substring(2));
      } else {
        return kamusAngkaStr[i] + ' belas ' + numberToWords(numStr.substring(2));
      }
    } else if (pecahan.length == 1 && numStr[0] == kamusAngka[i]) {
      if (numStr.length >= 13) {
        return kamusAngkaStr[i] + ' triliun ' + numberToWords(numStr.substring(1));
      } else if (numStr.length >= 9) {
        return kamusAngkaStr[i] + ' miliar ' + numberToWords(numStr.substring(1));
      } else if (numStr.length >= 6) {
        return kamusAngkaStr[i] + ' juta ' + numberToWords(numStr.substring(1));
      } else if (numStr.length > 4) {
        return kamusAngkaStr[i] + ' ribu' + numberToWords(numStr.substring(1));
      } else {
        return kamusAngkaStr[i] + numberToWords(numStr.substring(1));
      }
    }

    // console.log(numStr, '======', pecahan);

    if (numStr[0] == 0) {
      return numberToWords(numStr.substring(1));
    }
  }
}


// function numberToWords(num) {
//   var kamusAngkaStr = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh'];
//   var kamusAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   var result = '';
//   var numStr = num.toString();

//   for (var i = 0; i < numStr.length; i++) {
//     if (numStr.length - i == 3) {
//       if (numStr[i] == 1) {
//         result += 'seratus';
//       } else {
//         for (var j = 0; j < kamusAngka.length; j++) {
//           // console.log(numStr[i], '===', kamusAngka[j])
//           if (numStr[i] == kamusAngka[j]) {
//             result += kamusAngkaStr[j] + ' ratus';
//           }
//         }
//       }
//     } else if (numStr.length - i == 2) {
//       // console.log(numStr[i], '===', kamusAngka[j])
//       if (numStr[i] == 1) {
//         result += 'sepuluh';
//       } else {
//         for (var j = 0; j < kamusAngka.length; j++) {
//           if (numStr[i] == kamusAngka[j]) {
//             result += kamusAngkaStr[j] + ' puluh';
//           }
//         }
//       }
//     } else {
//       for (var j = 0; j < kamusAngka.length; j++) {
//         if (numStr[i] == kamusAngka[j]) {
//           result += kamusAngkaStr[j];
//         }
//       }
//     }

//     if (i !== numStr.length -1 && numStr[i] != 0) {
//       result += ' ';
//     }
//   }
//   return result
// }


// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(900));
console.log(numberToWords(113));
console.log(numberToWords(25433746789860));
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(28079));
console.log(numberToWords(82102713));
