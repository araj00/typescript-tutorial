type User = {
    name: string,
    age: number
}

const user: User = {
    name: 'Aman raj',
    age: 21
}

type ageOptional = {
    name: string,
    age?: number
}

const userWithAgeOptional: ageOptional = {
    name: 'aman raj'
}

// intersection of type
type statusResponse = {
    status: number;
    isValid: boolean;
}

type getUserResponse = {
    user: User
}

//  '&' is being used to intersect all the properties from different types
type ApiGetUserResponse = statusResponse & getUserResponse

let response: ApiGetUserResponse = {
    status: 200,
    isValid: true,
    user: {
        name: 'aman raj',
        age: 12
    }
}

// template string types

type stringThatStartsWithGet = `get${string}`

const myString: stringThatStartsWithGet = 'getadeliverty'

// valueA has the type any, but, using the as keyword, this code coerces the valueB to have the type string.

// Note: To assert a variable of TypeA to have the type TypeB, TypeB must be a subtype of TypeA. Almost all TypeScript types, besides never, are a subtype of any, including unknown.

const valueA: any = '23';
const valueB = valueA as number;
console.log(typeof valueB)

// utility types

// type Data = {
//     [key: string] : any;
// } 

// above type Data will be equivalent to record data type

type Data = Record<string,any>;
const userdata : Data = {
    name : 'af',
    sex : 'male'
}

type UserRow = {
    id: number;
    name: string;
    email: string;
    addressId: string;
}

// omit type which is used to omit some property out of  properties in the given type 
type UserRowWithoutAddressId = Omit<UserRow, 'addressId'>;

type UserRowWithoutIds = Omit<UserRow, 'id' | 'email'>

// pick type to use some properties out of the given type
type UserRowWithNameOnly = Pick<UserRow,'name'>

type UserRowWithEmailAndAddressIdOnly = Pick<UserRow,'email' | 'addressId'>

// partial type to make the properties optional for the given type

type UserRowInsert = Partial<UserRow>