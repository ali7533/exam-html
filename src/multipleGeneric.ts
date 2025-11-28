function muGe<t,b,j>(name:t,id:b,dob:j):void{
    console.log(`name:${name},id:${id},t${dob}`)
}
muGe<string,number,number>("alien",32,3239)
muGe<number,string,number>(32,"alien",3239)
//This way you can send types as parameter