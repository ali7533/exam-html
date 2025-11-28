type empS={name:string,address:string}
type empN={age:number,salary:number}
const emp:empS|empN={name:'evo',address:'new york',age:33}
//dont have to write full objects
console.log(emp)

const emp2:empS & empN={name:'evo',address:'new york',age:33,salary:332}
//have to write full objects
console.log(emp2)