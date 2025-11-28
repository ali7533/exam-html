function fun<T extends { toString(): string }>(data: T): string {
  const str = data.toString();
  return `${str} ${str} ${str}`;
}
let out:string=fun<string>("hello")

console.log(out)