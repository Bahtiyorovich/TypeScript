/*
// o'zgaruvchiga type berish
const firstName: string = 'sherzod'
// console.log(firstName)

const lastName: string = 'Yoqubov'
// console.log(lastName)

const x: number = 17

const isMarried: boolean = true

const item: null = null
const item2: undefined = undefined

// array

const colors: string[] = [
    '#fff',
    '#000',
    '#7f7f7f7f'
]

const numbers: number[] = [2021, 2022, 2023]
*/

/* any type - bu ma'lumot turi
    o'z ma'lumot turini hohlagancha o'zgartirish mumkin
    haqiqiy loyihalarda hech qachon any type da foydalanmang
    */

// smth o'zgaruvchisini istalgancha o'zgartirmoda

/*let smth: any = 1
console.log(smth)

smth = 'xs'
console.log(smth)

smth = ['#fff']
console.log(smth)
*/

/*
// Function type

function logger(a: number | string): void {
    if(typeof a === 'string'){
        console.log(a.toUpperCase())
    }else if(typeof a === 'number'){
        console.log(a.toFixed())
    }
}


// array 
const numbers: number[] = [1,2,3,4,5]
numbers.map((num: number) => console.log(num.toFixed()))

// // object type
// price - require
// price? - no require 

const logCar0 = (car: {name: string; price?: number}): string => {
    return `My car name is - ${car.name}, this is price - ${car.price}`
}
console.log(logCar0({ name: 'Lamborghini'}))


// o'zgaruvchilarga type berishda ikki usul mavjud;
// 1 - usul object method
type CarType = {
    name: string;
    price: number;
}

// 2 - usul variable
type stringOrNumber = string|number
const ds:stringOrNumber = '' // maybe
const ds2:stringOrNumber = 2023 // maybe
//const ds3:stringOrNumber = true // not maybe

const logCar = (car: CarType): string => {
    return `My car name is - ${car.name}, this is price - ${car.price}`
}
console.log(logCar({ name: 'Lamborghini', price: 3000}))

*/
/*
interface ICarType {
    carName: string;
    carPrice: number;
    carColor: string;
}

interface IMyCarType extends ICarType {
    carPosition: string;
    createdAt: {}; // data type is object
}

const myCar = (carInfo: IMyCarType): void => {
   console.log(`About My car is full Info: 
        ${carInfo.carName}, ${carInfo.carPosition}, 
        ${carInfo.carColor}, ${carInfo.carPrice}, 
        ${carInfo.createdAt}
    `)
}
console.log(myCar({ carName: 'GR/T', carColor: 'black', carPosition: 'LTZ FULL', carPrice: 3000, createdAt: new Date()}))
*/

// qattiq bog'lanish
/*
interface Ipoint {
    x: number;
    y: number;
}

interface I3DPoint extends Ipoint {
    z: number;
} 

const logPoint = (point: Ipoint): void => {
    const d3:I3DPoint =  point as I3DPoint
}


// amaliyot: db.json filedagi ma'lumotlarga inteface orqali type berish

interface ICarInfo {
    name: string;
    color: string;
    isBallon: boolean;
    speed: Ispeed;
    price: Iprice;
}
interface Ispeed {
    max: number;
    min: number;
}
interface Iprice {
    total: string;
    credit: string;
    discount: number;
}
*/

// Literal Type;

/*
const car5: 'GT/R' = "GT/R"

type actionType = 'show' | 'hide'

function logAction(action: actionType): boolean {
    switch(action){
        case 'hide':
            return true;
        case 'show': 
            return false;    
    }
}

console.log(logAction('show'))
*/

// ENUM 









































































































































































































































