"use strict";
var _a, _b, _c;
const quill = {
    name: "Hamabe",
    role: "frontend",
    follower: 2000000
};
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase(22);
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
}
class Dog {
    constructor() {
        this.kind = "dog";
    }
    speak() {
        console.log("Bow-wow");
    }
}
class Bird {
    constructor() {
        this.kind = "bird";
    }
    speak() {
        console.log("Tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case "bird":
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
const input = document.getElementById("input");
input.value = "untitti";
const douwloadedData = {
    id: 1
};
console.log((_b = (_a = douwloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
const userData = (_c = douwloadedData.user) !== null && _c !== void 0 ? _c : "no-user";
function advancedFn(...args) {
}
advancedFn(0, "hi", true);
