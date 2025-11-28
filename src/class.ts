class Person {
    firstName: string;
    lastName:string
    fullName:string
    dateOfBirth:bigint
    constructor(firstName: string,lastName:string,dateOfBirth:bigint) {
        this.firstName = firstName;
        this.lastName=lastName
        this.fullName=firstName+" "+lastName
        this.dateOfBirth=dateOfBirth
    }
    returnAge(pp:string){
        return `${this.dateOfBirth} ${pp}`
    }
}

const person = new Person("Jane",'mary',323423423n);
console.log(person.fullName);
console.log(person.returnAge('hello'))