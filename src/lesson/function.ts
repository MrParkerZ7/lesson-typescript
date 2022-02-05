function add(n1: number, n2: number, justLogResult: boolean = true): number {
   const result = n1 + n2
   if (justLogResult) {
      console.log(result)
   } else
      return result
}

const number1 = 5;
const number2 = 2.2;

console.log(add(number1, number2, true))
console.log(add(number1, number2, false))

console.log("------")

let functionType: (a: number, b: number, c: boolean) => number
functionType = add
console.log(functionType(number1, number2, true))
console.log(functionType(number1, number2, false))
