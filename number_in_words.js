
function thousand(tampung, str, n) {

  if (str.length >= 4 && str.length < 7) {
    return tampung + "ribu " + numberToWords(Number(str.slice(n)))
  }
  else if (str.length >=7  && str.length < 10) {
    return tampung + "juta " + numberToWords(Number(str.slice(n)))
  }
  else if (str.length >=10  && str.length < 13) {
    return tampung + "milyar " + numberToWords(Number(str.slice(n)))
  }
  else if (str.length >=13  && str.length < 16) {
    return tampung + "trilyun " + numberToWords(Number(str.slice(n)))
  } else {
    return tampung + numberToWords(Number(str.slice(n)))
  }
}


function numberToWords(number) {
  // Your code here
  var str = String(number)
  var angka = ['', 'satu ', 'dua ', 'tiga ', 'empat ', 'lima ', 'enam ', 'tujuh ', 'delapan ', 'sembilan ',]
  var tampung = ""

  if (str.length === 0) {
    return ""
  }

  else if ((str.length - 2) % 3 === 0) {
    // tampung = angka[Number(str[0])]

    if (str[0] == 1 && str[1] == 0) {
      tampung += "sepuluh "
    }
    else if (str[0] == 1 && str[1] == 1) {
      tampung += "sebelas "
    }
    else if (str[0] == 1) {
      tampung += angka[Number(str[1])] + "belas "
    } else {
      tampung += angka[Number(str[0])] + "puluh " + angka[Number(str[1])] + " "
    }

    return thousand(tampung, str, 2)

  }

  else if (number <= 9) {
    return angka[number]
  }

  else if (str.length % 3 === 0) {
    if (str[0] == 1) {
      return "seratus " + numberToWords(Number(str.slice(1)))
    } else {
      return angka[Number(str[0])] + "ratus " + numberToWords(Number(str.slice(1)))
    }

    // return thousand(tampung, str, 1)
  }

  else if ((str.length -1 ) % 3 === 0) {
    if(str[0] === 1 && str.length == 4){
      return "seribu " + numberToWords(Number(str.slice(1)))
    } else{
      tampung += angka[Number(str[0])]
    }
    return thousand(tampung, str, 1)
  }

}

// Driver code
console.log(numberToWords(100000000000000));
console.log(numberToWords(999000000000000));
console.log(numberToWords(2011845));
console.log(numberToWords(12345));

