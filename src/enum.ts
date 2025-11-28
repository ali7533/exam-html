enum roleEnum{'admin','user'}
enum defualtEnumValue
{
first,//=1
second,//=2
third,//=3
forth//=4
}
type users={name:string,age:number,email:string,role:roleEnum}


let user1:users={name:'mohanlal',age:77,email:'mohanlal@gmail.com',role:roleEnum.admin}
console.log(user1)
console.log(defualtEnumValue)
/*
{ name: 'mohanlal', age: 77, email: 'mohanlal@gmail.com', role: 0 }
{
  '0': 'first',
  '1': 'second',
  '2': 'third',
  '3': 'forth',
  first: 0,
  second: 1,
  third: 2,
  forth: 3
}
  */