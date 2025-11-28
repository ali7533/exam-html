var add = function (a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
}
var functionBody = 'console.log("Hello from Function constructor!"); return a + b;';
var multiply = new Function('a', 'b', functionBody);
var divide = function (a, b) {
    return eval("".concat(a, " / ").concat(b));
};
console.log(add(1, 2));
console.log(subtract(3, 6));
console.log(multiply(4, 5)); // Outputs: Hello from Function constructor! then 15
console.log(divide(6, 88));
//write a program in normal function and FUNCTION EXPRESSION to execute the operation on the variable.
function isPalindrome(str) {
    var stro;
    if (typeof (str) === "number")
        stro = str.toString();
    else
        stro = str;
    var strArray = stro.split('');
    var stroRerversed = strArray.reverse().join('');
    if (stro === stroRerversed)
        console.log('The string is a palindrome');
    else
        console.log('The string is not a palindrome');
}
isPalindrome('123231');
console.log('--------------------------------');
isPalindrome(12321);
var currentTime = function (label) {
    var date = new Date();
    console.log("".concat(label, ": ").concat(date.toLocaleTimeString()));
};
currentTime('Current time :');
