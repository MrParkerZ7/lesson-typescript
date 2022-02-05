let unionType1: {
   name: string
   gender: number | string
   role: 'User' | 'Hacker'
} = {
   name: "Puck",
   gender: "Male",
   role: 'Hacker'
}
console.log(unionType1)

let unionType2: {
   name: string
   gender: number | string
   role: 'User' | 'Hacker'
} = {
   name: "Rose",
   gender: 2,
   role: 'User'
}
console.log(unionType2)

type aliasType = number | string
type aliasConversion = 'User' | 'Hacker'
let unionType3: {
   name: string
   gender: aliasType
   role: aliasConversion
} = {
   name: "Max",
   gender: 1,
   role: 'Hacker'
}
console.log(unionType3)