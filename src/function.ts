import { User } from "./types";
  
  const users: User[] = [
    {  name: "Jane",age : 21 },
    {  name: "Jon" ,age : 21}
  ];
  
//   if you are using async function and it has return then make sure to use Promise<return type | null>
  async function getUserById(name: string): Promise<User | null> {
    const foundUser = users.find(user => user.name === name);
  
    if (!foundUser) {
      return null;
    }
  
    return foundUser;
  }
  
  export async function runProgram() {
    const user = await getUserById('Jon');
    console.log(user)
    return user
  }

//   function type
type EventContext = {
    value : string
}

// Notice that the type of the eventCallback parameter is a function type

function onEvent(eventName: string, eventCallback: (target:EventContext) => void){
    //... implementation
}

// user-defined type guards, which are special functions that allow TypeScript to better infer the type of some value.

const isProduction = false;
const valuesArray = ['some-string',isProduction && 'production']

function processArray(array: string[]){
    // do something with array
}

// the below commented code will give error,based on not able to infer the type correctly, saying that Argument of type '(string | boolean)[]' is not assignable to parameter of type 'string[]'. Type 'string | boolean' is not assignable to type 'string'.Type 'boolean' is not assignable to type 'string'.

// processArray(valuesArray.filter(Boolean));  

// so to overcome that error we use user-defined type guards
function isString(value: any): value is string {
    return typeof value === 'string'
}

// now the typescript knows that valuesArray.filter(isString) is of type string[]
processArray(valuesArray.filter(isString))