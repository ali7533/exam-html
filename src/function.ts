let add = (a: number, b: number): number => {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

let functionBody: string = 'console.log("Hello from Function constructor!"); return a + b;';
let multiply = new Function('a', 'b', functionBody);


let divide = (a: number, b: number): number => {
    return eval(`${a} / ${b}`);
}
console.log(add(1, 2));
console.log(subtract(3, 6))
console.log(multiply(4, 5) );// Outputs: Hello from Function constructor! then 15
console.log(divide(6, 88));
//write a program in normal function and FUNCTION EXPRESSION to execute the operation on the variable.

function isPalindrome(str:string | number):void {
    let stro:string;
    if(typeof(str)==="number")
        stro=str.toString();
    else 
        stro=str
    let strArray:string[] = stro.split('');
    let stroRerversed:string = strArray.reverse().join('');
    if(stro===stroRerversed)
        console.log('The string is a palindrome');
    else
        console.log('The string is not a palindrome');
}
isPalindrome('123231');
console.log('--------------------------------');
isPalindrome(12321);

const currentTime:(label: string) =>void=(label)=>  {
    const date: Date = new Date();
    console.log(`${label}: ${date.toLocaleTimeString()}`);
};

currentTime('Current time :');