
const convertRomanNumeral = (romanNumeralStr) => {
    const romanNumeralMap = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }

    let result = 0

    const romanNumeralArr = romanNumeralStr.split('')

    const incrementOrDecrement = (nextChar, char) => {
        if (romanNumeralMap[char] >= romanNumeralMap[nextChar]) {
            result += romanNumeralMap[char]  
        } else {
            result -= romanNumeralMap[char]
        }
    }

    romanNumeralArr.forEach((char, idx) => {
        const nextChar = romanNumeralStr[idx + 1]

        if (nextChar) {
            incrementOrDecrement(nextChar, char)
        } else {
            result += romanNumeralMap[char]
        }

    })

    return result

}

module.exports = convertRomanNumeral;
