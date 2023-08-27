let a:string = 'typescript';
a = 'javascript';
console.log(a);

// const type usually does not allow redefining the value of the variable that's why below code will throw an error on change.

// const secondLanguage:string = 'typescript';
// secondLanguage = 'javascript';
// console.log(secondLanguage);

let hasError: boolean = true;
let isValid: boolean = false;

//  truthy and falsy values are not converted into their boolean equivalents and will throw an error if used with these variables.
// isValid = 1;
// hasError = 0;

// if you are using unknown type in typescript then When doing any operation with a value of type unknown, TypeScript needs to make sure that the type is the one it expects. And solution for that is using typeof operator;

let code : unknown;
code = 1000;
let codeIsGreater = typeof code === 'number' ? code > 2023 : false;
console.log(codeIsGreater);

// use of tuple
let tuple: [number,string] = [22,'Araj'];

// if i give less than or more than the number of elements specified earlier then it will give me an error
// tuple = [21,'Aram',21]

// const array : number[] = [1,23];
// another way to write above array variable is 
const array : Array<number> = [1,234]
array.push(223)
console.log(array)