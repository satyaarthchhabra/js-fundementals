console.log("polyfill  for bind methord ");
// in this we try to make a prototype function 
let name = {
  firstName: "satyaarth ",
  lastName: " chhabra",
};
const printName = function (hometown, state, country) {
  console.log(
    `${this.firstName} ${this.lastName} my hometown is ${hometown} ${state} ${country}  `
  );
};

let printSatyaarthName = printName.bind(name, "delhi", "newDelhi", "india");
printSatyaarthName();
Function.prototype.myBind = function (...args1) {
  let obj = this;
  return function (...args2) {
    obj.call(...args1, ...args2);
  };
};
// in this function mybind we are reutning the function , here this keyword refer to the function to which my bind is applied and args 1 and 2 are params .ok

let printSatyaarthName2 = printName.myBind(name, "asas");
printSatyaarthName2("abc", "asas");
