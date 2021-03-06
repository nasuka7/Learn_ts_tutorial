"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const Nameable = {
    name: "Nagano"
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const tmpDevelopment = {
    name: "Hashimoto",
    age: 23,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
const user = tmpDevelopment;
