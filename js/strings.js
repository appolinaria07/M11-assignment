//STEP 1
// let userName = prompt('Please enter your name').trim()
// if (userName.indexOf(' ') !== -1) {
//     let nameParts = userName.split(' ')
//     let charCount = 0
//     for (let i=0; i<nameParts.length; i++) {
//         let word = nameParts[i].trim()
//         word = word.split('')
//         charCount = charCount + word.length
//     }
//     alert(charCount)
// } else {
//     alert(userName.length)
// }

//STEP 2
// let userName = prompt('Please enter your name')
// let charNum = prompt('Please enter a number to find to which letter in your name it corresponds to')
// alert(userName.charAt(charNum - 1))

//STEP 3
// let firstName = prompt('Please enter your first name')
// let lastName = prompt('Please enter your last name')
// let fullName = firstName.concat(' ', lastName).toString()
// alert(`Your name is: ${fullName}`)

//STEP 4
// let phrase = 'The quick brown fox jumps over the lazy dog'
// alert(phrase.indexOf('fox'))

//STEP 5
// let phrase = 'The quick brown fox jumps over the lazy fox'
// alert(phrase.lastIndexOf('fox'))

//STEP 6
// let phrase = 'The quick brown fox jumps over the lazy dog.'
// let userName = prompt('Please enter your full name')
// alert(phrase.replace('the lazy dog', userName))

//STEP 7
// let phrase = 'The quick brown fox jumps over the lazy dog.'
// let word = prompt('Please enter any word')
// if (phrase.indexOf(word) !== -1) {
//     alert(`The word '${word}' was found in the text`)
// } else {
//     alert(`The word ${word} was not found in the text`)
// }

//STEP 8
// let old_string = 'The quick brown fox jumps over the lazy dog'
// let new_string = old_string.slice(old_string.indexOf('the'))
// alert(new_string.toUpperCase())

//STEP 9
// let phrase = '    THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG    '
// alert(phrase.trim().toLowerCase())

//STEP 10
let phrase = 'the quick brown fox jumps over the lazy dog'
let firstChar = phrase.slice(0,1).toUpperCase()
phrase = phrase.slice(1)
alert(firstChar.concat(phrase))