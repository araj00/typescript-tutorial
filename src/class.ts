class Person {
    instantiatedAt = new Date();

    constructor(
        public name: string,
        public age: number
    ) { }
}
interface Logger {
    debug(message: string, metadata?: Record<string, unknown>): void;
    info(message: string, metadata?: Record<string, unknown>): void;
    warning(message: string, metadata?: Record<string, unknown>): void;
    error(message: string, metadata?: Record<string, unknown>): void;
}

interface Clearable {
    clear(): void;
}

// for reference please look over the topic of use of this in js.

//   if you want to have interface properties in class use implements keyword to include it
// to include two different interface then we can do it so using comma as a separator

class ConsoleLogger implements Logger, Clearable {
    debug(message: string, metadata?: Record<string, unknown>) {
        console.info(`[DEBUG] ${message}`, metadata);
    }

    clear() {
        console.clear();
    }

    info(message: string, metadata?: Record<string, unknown>) {
        console.info(message, metadata);
    }
    warning(message: string, metadata?: Record<string, unknown>) {
        console.warn(message, metadata);
    }
    error(message: string, metadata?: Record<string, unknown>) {
        console.error(message, metadata);
    }
}

//   abstract class

// Abstract classes are similar to normal classes, with two major differences: They cannot be directly instantiated and they may contain abstract members. Abstract members are members that must be implemented in inheriting classes.


abstract class Stream {

    abstract read(count: number): number;

    abstract write(data: Buffer): void;

    copy(count: number, targetBuffer: Buffer, targetBufferOffset: number) {
        const data = this.read(count);
    }
}

class FileStream extends Stream {
    read(count: number): number {
        // implementation here
        return count
    }

    write(data: Buffer) {
        // implementation here
    }
}

const fileStream = new FileStream();

//   use of this in class
class Employee {
    constructor(
        public identifier: string
    ) { }

    //     getIdentifier() {
    //       return this.identifier;
    //     }

    // changing the above function into an arrow function
    getIdentifier = () => {
        return this.identifier;
    }
// below 'this' is used to not compare the two subclasses
    isSameEmployeeAs(employee: this) {
        return this.identifier === employee.identifier;
      }
    
}


const employee = new Employee("abc-123");

console.log(employee.getIdentifier());

//   what about the below scene

const obj = {
    getId: employee.getIdentifier
}
console.log(obj.getId()) //undefined because in getId function is not an arrow function and if it was an arrow function then this refers to the upper level of scope

// class can also be used as type as described below
  
  class Warehouse {
    constructor(
      public identifier: string
    ) {}
  }
  
  function printEmployeeIdentifier(employee: Employee) {
    console.log(employee.identifier);
  }
  
  const warehouse = new Warehouse("abc");

  printEmployeeIdentifier(employee)
  
 // printEmployeeIdentifier(warehouse); ===>  throws an error because warehouse is of Warehouse class type

 class FinanceEmployee extends Employee {
    specialFieldToFinanceEmployee = '';
  }
  
  class MarketingEmployee extends Employee {
    specialFieldToMarketingEmployee = '';
  }
  
  const finance = new FinanceEmployee("fin-123");
  const marketing = new MarketingEmployee("mkt-123");
  
//   console.log(marketing.isSameEmployeeAs(finance)); ==> this throws an error because in isSameEmployeeAs we have used the argument type as this which infers automatically based on the instance of class being used
console.log(finance.isSameEmployeeAs(finance))