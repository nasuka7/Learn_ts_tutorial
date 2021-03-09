"use strict";
function copy(value, key) {
    value[key];
    return value;
}
console.log(copy({ name: "Hamabe", age: 38 }, "name"));
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve("hello");
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetable = ["tomato", "Broccoli", "Asparagus"];
