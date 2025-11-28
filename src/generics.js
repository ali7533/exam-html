function fun(data) {
    var str = data.toString();
    return "".concat(str, " ").concat(str, " ").concat(str);
}
var out = fun('hello');
console.log(out);
