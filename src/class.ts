abstract class Person {
  constructor(public readonly name: string, protected age: number) {
  }
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`Hello My Name is ${this.name}. I am ${this.age} years old.`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Teacher extends Person {
  private static instance: Teacher;
  explainJob() {
    console.log(`im teacher and i teach ${this._subject}`);
  }
  get subject() {
    return this._subject;
  }
  set subject(value) {
    if (!value) {
      throw new Error("iiiiiiiiiiiiiii")
    }
    this._subject = value;
  }
  private constructor(name: string, age: number, private _subject: string) {
    super(name, age);
  }
  static getInstance() {
    if (Teacher.instance) return Teacher.instance;
    Teacher.instance = new Teacher("Hirose", 22, "Math");
    return Teacher.instance;
  }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);


