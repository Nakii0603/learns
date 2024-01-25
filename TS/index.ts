//number
const plusSum = (a: number, b: number) => {
  return a + b;
};
console.log(plusSum(3, 4));
//bollean
let colorBlue: boolean = true;
console.log(typeof colorBlue);
//string
let blue: string = "blue";
let red: string = "red";
console.log(blue + red);
//any
let hera: any = true;
let hero: any = "string";
let heru: any = 42;
//array
let arr: number[] = [123, 2, 5, 76];
//tuple
let y: [string, number, boolean];
y = ["strinf", 23, true];
// y = [23, "string",5];

//null and undfined
let u: undefined = undefined;
let n: null = null;
//void
function warnUser(): void {
  console.log("This is my warning message");
}