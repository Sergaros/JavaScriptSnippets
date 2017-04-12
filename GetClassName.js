//This function return class name (only for embeded JS types)
const getClass = (obj)=>{
    return {}.toString.call(obj).slice(8, -1);
};

let a = [1,2];
let b = 10;
let c = 'text';
let d = new Date();

console.log(`a class - ${getClass(a)}`);
console.log(`a class - ${getClass(b)}`);
console.log(`a class - ${getClass(c)}`);
console.log(`a class - ${getClass(d)}`);
