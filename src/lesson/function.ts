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

console.log("------")

type functionType = (a: number, b: number, c: boolean) => number
function tryCallBack(n1, n2, callBack: functionType): void {
   callBack(n1, n2, true)
}
tryCallBack(1, 2, add)

console.log("------")

function runError(): never {
   throw { message: 'Error' }
}

runError()