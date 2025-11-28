// Basic types
let a: number = 1;
let b: string = '1';
let c: boolean = true;
let dd: any = 1;
let ee: unknown = 1;

let h: null = null;
let i: undefined = undefined;
let j: symbol = Symbol('1');
let k: bigint = BigInt(1);
let bign:bigint = 3432488983853n
let l: number[] = [1, 2, 3];
let m: string[] = ['1', '2', '3'];

// Special types
let d: any = 1;           // Can be anything (disables type checking)
let e: unknown = 1;       // Type-safe alternative to 'any'
let g: void = undefined;  // Used for functions that don't return a value

// NEVER TYPE - represents values that should never occur
// ❌ This will cause an error - you CAN'T assign a value to 'never'
// let f: never = 1;  // Error: Type '1' is not assignable to type 'never'

// ✅ Correct uses of 'never':

// 1. Function that always throws (never returns normally)
function throwError(message: string): never {
    throw new Error(message);
    // Function never reaches the end, so return type is 'never'
}

// 2. Function with infinite loop (never returns)
function infiniteLoop(): never {
    while (true) {
        // This function never returns
    }
}

// 3. Exhaustive type checking
type Shape = 'circle' | 'square' | 'triangle';

function getArea(shape: Shape): number {
    switch (shape) {
        case 'circle':
            return Math.PI * 2;
        case 'square':
            return 4;
        case 'triangle':
            return 3;
        default:
            // TypeScript ensures all cases are handled
            // If we add a new Shape, this line will cause an error
            const exhaustiveCheck: never = shape;
            throw new Error(`Unhandled shape: ${exhaustiveCheck}`);
    }
}

// 4. Variable that should never have a value
let f: never;
// You can't assign anything to it:
// f = 1;        // ❌ Error
// f = "hello";  // ❌ Error
// The only way it gets a value is through exhaustive checks or unreachable code

// ============================================
// VOID vs NEVER - Key Differences:
// ============================================

// VOID: 
// - Represents the ABSENCE of a value
// - Used for functions that COMPLETE NORMALLY but return nothing
// - Function reaches the end and implicitly returns 'undefined'
// - Can be assigned 'undefined' (but mainly used as return type)

function logMessage(message: string): void {
    console.log(message);
    // Function completes normally, returns undefined
}

function processData(data: string): void {
    // Do something...
    return; // Or implicit return
    // Returns undefined
}

// NEVER:
// - Represents values that should NEVER occur
// - Used for functions that NEVER RETURN (throw or infinite loop)
// - Function NEVER reaches the end
// - CANNOT be assigned any value (not even undefined)

function alwaysThrows(): never {
    throw new Error("This function never returns normally");
    // Code after this is unreachable
}

function infinite(): never {
    while (true) {
        // Loop forever, never returns
    }
    // Code after this is unreachable
}

// Summary:
// void   = "Function completes, but returns nothing" (returns undefined)
// never  = "Function never completes" (throws or loops forever)



//unknown type is a type-safe alternative to any
let u: unknown = 1;
let u2: unknown = '1';
let u3: unknown = true;
let u4: unknown = null;
let u5: unknown = undefined;
let u6: unknown = Symbol('1');
let u7: unknown = BigInt(1);
let u8: unknown = [1, 2, 3];
let u9: unknown = {a: 1, b: 2, c: 3};
let u10: unknown = () => 1;

if(typeof(u2) == 'string'){
    console.log('u2 is a string');
}
if(typeof(u2) == 'number'){
    console.log('u2 is a number');
}
if(typeof(u2) == 'boolean'){
    console.log('u2 is a boolean');
}
if(typeof(u2) == null){
    console.log('u2 is a null');
}
//if unknown is assigned to a variable, it can be reassigned to any 
//after checking the type using conditional statements .Than write program to execute the operation on the variable.