function p(data:string | number | boolean):number{
    switch(typeof(data)){
        case 'string':return 1;
        break;
        case 'number':return 2
        break 
        case 'boolean':return 3
        default: return 4
    }
}
console.log(p(3))