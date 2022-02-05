function add(n1: number, n2: number, showResult: boolean = true) {
   const result = n1 + n2
   if (showResult) {
      console.log(result)
      return result
   } else
      return result
}

const number1 = 5;
const number2 = 2.2;

const result = add(number1, number2, true);