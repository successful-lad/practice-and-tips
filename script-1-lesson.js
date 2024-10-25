// let // const // var

let name = 'Yehor'
let name2 = 'asdasdas';

console.log(name) // Yehor

name = "Alexander"

console.log(name) // Alexander


const age = 27;

var globalVariable = 'something'

globalVariable = 'something else'

let newName;

console.log(newName) // undefined

let skill = null;

let isHeIll = true


//string
//numbers
//undefined
//null
//boolean


//object
let user = {
    name: 'Yehor',
    age: 27,
    skill: null
}

console.log(user.age)


const Arr = [
    'banana', // 0
    'apple', // 1
    'orange' //2
]

console.log(Arr[2]) //orange
// get sum 1 + 2


const getSum = (firstVariable, secondVariable) => {
    return  firstVariable + secondVariable
}

console.log(getSum(1, 2))
console.log(getSum(5, 10))

console.log(getSum(100, 2))

const randomNumber = 20;

const minusSum = (num1, num2) => {
    return num2 - num1 - randomNumber
}

console.log(minusSum(100, 2))

console.log(result)


const sixTen = 'SixTen';

sixTen.toUpperCase()

console(sixTen) // SIXTEN

const getSalary = (condition, salary2) => {
    if (condition) {
        return salary2 + 123
        // do something
    } else  {
        return salary2 - 123123
    }
}



console.log(getSalary(false, 1000)) // -111231231