const print=(name:string,age:number,address:string):void=>{
    console.log("name:"+name)
    console.log("age:"+age)
    console.log("address:"+address)

}
print("ali",21,"mubarak manzil")


//default parameter
const print2=(name:string,age:number,address:string="undocumented"/*If address is not specified ,it will be assigned to undocumented*/):void=>{
    console.log("name:"+name)
    console.log("age:"+age)
    console.log("address:"+address)

}
print2("ali",21)

//optional parameter
const print3=(name:string,age:number,address?:string/*If type of address is defined in parameter and it does get a value while calling function ,than a error occurs.To avoid that we use '?' symbol*/):void=>{
    console.log("name:"+name)
    console.log("age:"+age)

    address?console.log("address:"+address):null

}
print3("ali",21)
