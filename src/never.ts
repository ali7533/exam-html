type Success<T> = { ok: true; value: T };
type Failure = { ok: false; error: string };
type Result<T> = Success<T> | Failure;

// Function that never returns because it always throws
function fail(message: string): never {
  throw new Error(message);
}

function isSuccess<T>(result: Result<T>): result is Success<T> {
  return result.ok;
}

function getValue<T>(result: Result<T>): T {
  if (isSuccess(result)) {
    return result.value;
  }

  // TypeScript knows this function never returns,
  // so the return type of getValue is still T.
  return fail(result.error);
}

function exhaustiveCheck(value: never): never {
  return fail(`Unexpected value: ${value}`);
}

type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number }
  | { kind: 'triangle'; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'triangle':
      return (shape.base * shape.height) / 2;
    default:
      // If a new shape is added but not handled here,
      // TypeScript will error because the type of `shape`
      // in this branch is `never`.
      return exhaustiveCheck(shape);
  }
}

const success: Result<number> = { ok: true, value: 42 };
const failure: Result<number> = { ok: false, error: 'Missing value' };

console.log('Area of circle', area({ kind: 'circle', radius: 2 }));
console.log('Value from success', getValue(success));

try {
  console.log('Value from failure', getValue(failure));
} catch (error) {
  console.error('Caught error from failure', (error as Error).message);
}

