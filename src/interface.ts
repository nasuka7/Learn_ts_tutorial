interface addFunc {
  (num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
  return n1 + n2;
}

type Nameable = {
  name: string;
  nickName?: string;
}

const Nameable: Nameable= {
  name: "Nagano"
}

interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}

class Developer implements Human {
  constructor(
    public name: string, 
    public age: number,
    public experience: number){}
  greeting(message: string) {
    console.log(message);
  }
}

const tmpDevelopment  = {
  name: "Hashimoto",
  age: 23,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  }
}
const user: Human = tmpDevelopment

