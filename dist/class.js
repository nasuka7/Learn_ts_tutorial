"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My Name is ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`im teacher and i teach ${this._subject}`);
    }
    get subject() {
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error("iiiiiiiiiiiiiii");
        }
        this._subject = value;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("Hirose", 22, "Math");
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
