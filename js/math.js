//STEP 1
// let userNum = prompt('Please enter any number')
// console.log(Math.abs(userNum))

//STEP 2
// let userNum = prompt('Please enter a decimal number')
// console.log(Math.ceil(userNum))

//STEP 3
// let userNum = prompt('Please enter a decimal number')
// console.log(Math.floor(userNum))

//STEP 4
// let userNums = prompt('Please enter 5 numbers delimited by a comma')
// userNums = userNums.split(',')
// let nums= []
// for (let i=0; i<userNums.length; i++) {
//     nums.push(parseFloat(userNums[i]))
// }
// console.log(`The largest number entered is: ${Math.max(...nums)} and the smallest number entered is:
// ${Math.min(...nums)}`)

//STEP 5
let userNum = parseFloat(prompt('Please enter a number to find the square root'))
console.log(Math.sqrt(userNum))