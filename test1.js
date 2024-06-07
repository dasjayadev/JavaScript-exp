const obj1 = {name: 'jayadev', age:28}
const obj2 = {name: 'jayadev', age:28}

// console.log(obj1 === obj2); //false

console.log(obj1.name === obj2.name); //true

function checkEqual (){
 return JSON.stringify(obj1) == JSON.stringify(obj2)
}
console.log(checkEqual()); //true