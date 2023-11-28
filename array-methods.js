// Declare Array
const alphabets = ['a','b','c'];

// Access array element
console.log(alphabets[0])

// Check length of the array
console.log(alphabets.length)

// Add element to the end of the array
alphabets.push('d')
console.log(alphabets)

// Remove element from the end of the array
alphabets.pop()
console.log(alphabets)

// Add element to the begining of the array
alphabets.unshift('z')
console.log(alphabets)

// Remove element from the begining of the array
alphabets.shift()
console.log(alphabets)

// Looping Array
// for loop
for(let i=0;i<alphabets.length;i++){
    console.log(alphabets[i])
}

//for of loop
for(const element of alphabets){
    console.log(element)
}

//while loop
let i=0;
while(i<alphabets.length){
    console.log(alphabets[i])
    i++
}

// Inbuilt Methods
const numbers = [1,2,3,4,5]

// Map
const updatedNumbers = numbers.map((item,index,array)=> item + 10)
console.log(updatedNumbers)

// Filter
const filteredNumbers = numbers.filter((item,index,array) => item > 3)
console.log(filteredNumbers)

// Reduce
const reducedNumber = numbers.reduce((previous,current)=> {
    // return previous + current
    previous = previous + current
    return previous
},0)
console.log(reducedNumber)

// Some
const someResult = numbers.some((item,index,array)=> item % 2 === 0)
console.log(someResult)

// Every
const everyResult = numbers.every((item,index,array) => item>=1)
console.log(everyResult)

// find
const findNumbers = numbers.find((item,index,array) => item > 1)
console.log(findNumbers)

// FindIndex
const findIndexNum = numbers.findIndex(item => item === 3)
console.log('index - ', findIndexNum)

// Spread operator
const num1 = [1,2,3]
const num2 = [4,5,6]
const concatedArray = [...num1,...num2]
console.log(concatedArray)

// Concat
console.log(num1.concat(num2,alphabets))

// Rest operator
const restExample = (...payload) =>{
    // you can access element here like array
    console.log(payload[1])
}
console.log(restExample(num1,num2,"test"))

// Slice
console.log(alphabets.slice(0,2))

//Slice from the end of the array
console.log(alphabets.slice(-2)) 

// Splice
const spliceNumbers = numbers.splice(0,2,'6')
console.log(numbers)

// Fill
const newArray = new Array(10).fill(5)
console.log(newArray)

// Flat
const flatArray = [1,[2,3],[[4,5]],6]
console.log(flatArray.flat(2))

// Reverse
console.log(numbers.reverse())

// Sort
const sortNumbers = [2,10,20,13,17,4]
console.log(sortNumbers.sort((a,b)=>b-a))