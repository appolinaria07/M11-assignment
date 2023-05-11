//STEP 1
// const alphabetStr = str =>{
//     let strArr = str.split(' ').toString().toLowerCase()
//     let sortStr = strArr.split('')
//     sortStr = sortStr.sort().toString().replace(/[,]/g, '').trim()
//     return sortStr
// }
// let str = prompt('Please enter a text to be sorted in the alphabetical order')
// console.log(alphabetStr(str))

//STEP 2
// const capitalizedText = str =>{
//     let strArr = str.split(' ')
//     let newStr = ''
//     for (i=0; i<strArr.length;i++){
//         let firstChar = strArr[i].slice(0,1).toUpperCase()
//         strArr[i] = strArr[i].slice(1)
//         newStr += firstChar.concat(strArr[i]) + ' '
//     }
//     return newStr.trimEnd()
// }

// let str = prompt('Please enter a text to capitalize')
// console.log(capitalizedText(str))

//STEP 3
// const numVowels = str => {
//     let output = str.toLowerCase()
//     output = output.match(/[aeiou]/g)
//     return output.length
// }

// let str = prompt('Please enter a text to count vowels')
// console.log(numVowels(str))

//STEP 4
// const strId = num => {
//     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     let output = ''
//     let numChars = Math.trunc(num)

//     for (i = 0; i < numChars; i++) {
//                 let randIndex = Math.ceil(Math.random() * chars.length);
//                 output += chars.charAt(randIndex);
//     }
//     return output
// }

// let num = parseFloat(prompt('Please enter a number of random characters to generate'))
// console.log(strId(num))

//STEP 5
let countryNames = ['Nicaragua', 'Australia', 'Papua New Guinea', 'New Zealand']
const longest_country_name = countryNames => {
    let longestName = ''
    let arrIndex = 0

    for (let i=0;i < countryNames.length;i++ ) {
        let country = countryNames[i]
        country = country.match(/[^\s]/g)
        if (country.length > longestName.length){
            longestName = country
            arrIndex = i
        }
    }

    return `The longest country name is ${countryNames[arrIndex]}.`
}
console.log(longest_country_name(countryNames))