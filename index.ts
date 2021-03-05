let hasvalue: boolean = true;
let count: number = 10.9999;
let single: string = "hello";
let double: string = 'hello';
let back: string = "kkkkkk";


const person = {
  name: "jack",
  age: 31
}

// tuple型
const fruits: string[] = ["apple","Banana","grape"];

// Enum型
enum CoffeeSize {
  SHORT= "SHORT",
  TALL= "TALL"
}

const coffee = {
  hot: true,
  size: CoffeeSize.SHORT,
}

// any型
let anything: any = true;
anything ="hello";

// Union型
let unionType: number | string = 20;
let unionTypes: (number | string)[] = [10, "unko"];

// Literal型
let clothSize : "small" | "medium" | "large" = "large";

  