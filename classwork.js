/**********
 * JavaScript Datatypes
 * Booleans
 * Strings
 * Objects
 * Numbers
 * Null
 * Undefined
 * Symbol
 */

// Boleans
let userHasQuit = false;
/*
Example of when we could use a boolean to continuously do something
for an unspecified amount of time

while(!userHasQuit){
 const selection = window.prompt('do you want to quit?', 'no')
 if(selection.toLowerCase().trim() === 'yes'){
    userHasQuit = true
  }
}
*/

const str = 'Hello World Its So Great';
console.log(str)
console.log(str.split(''))//simple array
const words = str.split(' ')
console.log(words)
console.log(str.charAt(2))
console.log(str.toLowerCase())

/*NUMBERS*/
const myNum = 32
console.log(myNum * myNum)

if(myNum > 5){
    console.log('you are not a child')
}

/*NULL & UNDEFINED*/

const socialLife = null;
let future

console.log(socialLife)
console.log(future)

/* Falsey */

// 0 , NaN
// Undefined
// ''
// Null
// false

// Arrays
// Common use is to store a list of things
const arr = [1, 2, 3]

arr.forEach((num) =>{
    console.log(num *2)
})

// Get an item
console.log(arr[0])

// Can't start array name with number
// can't name key characters(const, etc)
// has to be camelCase
// 

/* Functions */

//shortcut to reverese a string
const reverseString = (str) => {
    return str.split('').reverse().join('') 
    //turn string into array
    //reverse array
    //join array into string
}

console.log(reverseString('arthur'))

const reverseString2 = (str) => {
    const newString = []
    for(let i = str.length; i >= 0; i--){
        newString.push(str[i])
    }
    return newString.join('')
}
console.log(reverseString2('Lucas'))

const maxOfThree = (num1, num2, num3) => {
    const arr = [num1, num2, num3]
    arr.sort((a,b) => {
        return b - a //biggest to smallest
        //if you want smallest to biggest it's a - b
    })
    return arr[0]
}

console.log(maxOfThree(7,11,4))

/* Objects and Classes */
// Object is a noun
//Object is an instance of a class

// Object Literall is a regular obj without a class
const myObj = {
    name: 'Arthur',
    age: 'nunya'
}

// class

class Cat {
    constructor(name, age, cuteness){
        this.name = name;
        this.age = age;
        this.cuteness = cuteness;
        this.legs = 4;
        this.hasClaws = true
    }
    scratch(){
        if(this.age < 2 && this.hasClaws){
            console.log('Your couch is destroyed')
        } else {
            console.log('nothing happens, the cat knows better')
        }
    }
}

const huey = new Cat('Huey P Kitten', 4, Infinity)

console.log(huey)
huey.scratch()

class SuperCat extends Cat {
    constructor(name, age, cuteness, superPower){
        super(name, age, cuteness)
        this.superPower = superPower
    }
}
const patches = new SuperCat('Patches', 9, Infinity, 'flying')

console.log(patches)


class CrazyCatMan {
    constructor(){
        this.felineFriends = []
    }
    adoptCat(catName, age){
        const newFriend = new Cat(catName, age, Infinity)
        this.felineFriends.push(newFriend)
    }
}

const arthur = new CrazyCatMan()
arthur.adoptCat('patches jr', 0, Infinity - 1)

console.log(arthur)

// GIT
//initialize the git repo ```git init```
// check my git status ```git status```
// stage our commit ```git add -A``` (A stands for all)
// check my git status ```git status```
// commit ```git commit -m "some message"```
// check my git status ```git status```


