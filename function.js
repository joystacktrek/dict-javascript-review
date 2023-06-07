// global and local scope

let globalThing = "HEY"
let localThing = ''
// named function
function nameFunc(classBatch, ...studentName) {
    // do something
    console.log(`Batch: ${classBatch}`)
    console.log(studentName)
    console.log(globalThing)

    localThing = "HELLO"
}

// variable can contain a string, integer, 

// anonymous function
const anonFunc = function (param1, param2){
    // do something
}

// arrow function -> strict
// cannot call this before you declare it
const arrowFunc = (param1, param2) => {
    // do something
    // ->
    // => fat
}

nameFunc('DICT', 'Dalle', 'Jdeo','Cris', 'Joy')

console.log(localThing)

// recursion -> 
// 1. calling itself
// 2. base -> end recursion

// factorial
function factorial(num) {
    if(num <= 1 ) {
        return 1
    } else {
        return factorial(num-1) * num
    }
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(10))