console.log('call apply bind ');
const name ={
    firstName: 'satyaarth',
    lastName: 'chhabra',
}
const name2 ={
    firstName: 'anita',
    lastName: 'gulati',
}
let printFullName = function(hometown, state){
    console.log(`${this.firstName} ${this.lastName} my hometown is  ${hometown} and my state is  ${state}`)
}
printFullName.call(name,"mukherejee nagar", "delhi")

printFullName.apply(name2,["parmanand colony","chandigarh"])
// in call the first argument is the object which refers to this and then the other arguments work as props 

// the difference bw call and apply is in call we pass the arguments directly and in apply we pass the arguments in form of an array

// bind methord 
let printMyName = printFullName.bind(name2,"gangotri","kadkadduma")
printMyName();
// bind methord: the bind methord create the copy of the function but it doesn't call the function and we have to call the function '