// Function that never returns because it always throws
function fail(message) {
    throw new Error(message);
}
function isSuccess(result) {
    return result.ok;
}
function getValue(result) {
    if (isSuccess(result)) {
        return result.value;
    }
    // TypeScript knows this function never returns,
    // so the return type of getValue is still T.
    return fail(result.error);
}
function exhaustiveCheck(value) {
    return fail("Unexpected value: ".concat(value));
}
function area(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return Math.pow(shape.side, 2);
        case 'triangle':
            return (shape.base * shape.height) / 2;
        default:
            // If a new shape is added but not handled here,
            // TypeScript will error because the type of `shape`
            // in this branch is `never`.
            return exhaustiveCheck(shape);
    }
}
var success = { ok: true, value: 42 };
var failure = { ok: false, error: 'Missing value' };
console.log('Area of circle', area({ kind: 'circle', radius: 2 }));
console.log('Value from success', getValue(success));
try {
    console.log('Value from failure', getValue(failure));
}
catch (error) {
    console.error('Caught error from failure', error.message);
}
