interface mm{name:string,place:string;salary:number}
interface jd {game:string}
interface jd extends mm {id:number}
let person1:mm={name:'sods',place:'manjeri',salary:200000}
console.log(person1)