export interface Base {
   name: string
}

export class User implements Base {
   name: string;
   age: number;

   constructor(name: string, age: number = null) {
      this.name = name;
      this.age = age;
   }

   letHello() {
      return "Hello, " + this.name;
   }
}

let greeter = new User("Buck");

console.log(greeter.letHello())
