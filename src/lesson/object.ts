let objectThing: {
   name: string,
   age: number,
} = {
   name: 'Puck',
   age: 99,
}

console.log(objectThing.name)

let anyThing: any = {
   name: 'Pucker',
   job: 'Hacker',
}

console.log(anyThing.name)
console.log(anyThing.xxx)
console.log(anyThing)