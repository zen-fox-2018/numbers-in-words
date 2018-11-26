const kata = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan']

function numberToWords(number) {
    if (!number) {
        return ''
    } else {
        if (number <= 10) {
            if (number === 10) {
                return 'sepuluh'
            } else {
                return kata[number]
            }
        } else if (number < 20) {
            if (number === 11) {
                return 'sebelas'
            } else {
                return numberToWords(number - 10) + ' belas '
            }
        } else if (number < 100) {
            return numberToWords(Math.floor(number/10)) + ' puluh ' + numberToWords(number%10)
        } else if (number < 1000) {
            if (number < 200) {
                return 'seratus ' + numberToWords(number % 100)
            } else {
                return numberToWords(Math.floor(number/100)) + ' ratus ' + numberToWords(number%100)
            }
        } else if (number < 1000000) {
            if (number < 2000) {
                return 'seribu ' + numberToWords(number % 1000)
            } else {
                return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number%1000)
            }
        } else if (number < 1000000000) {
            return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number%1000000)
        } else if (number < 1000000000000) {
            return numberToWords(Math.floor(number/1000000000)) + ' milyar ' + numberToWords(number%1000000000)
        } else if (number < 1000000000000000) {
            return numberToWords(Math.floor(number/1000000000000)) + ' triliun ' + numberToWords(number%1000000000000)
        }
    }
}

// // Driver code
// console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));

console.log(numberToWords(1));
console.log(numberToWords(911910929999999));