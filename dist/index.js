"use strict";
let hasvalue = true;
let count = 10.9999;
let single = "hello";
let double = 'hello';
let back = "kkkkkk";
const person = {
    name: "jack",
    age: 31
};
// tuple型
const fruits = ["apple", "Banana", "grape"];
// Enum型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT,
};
// any型
let anything = true;
anything = "hello";
// Union型
let unionType = 20;
let unionTypes = [10, "unko"];
// Literal型
let clothSize = "large";
