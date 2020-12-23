console.log('function currying');
// currying is a process of creeating many functions or methords from a single function by preseting some of it argument 
const multiply=(x,y) =>console.log(x*y);
multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(8)
multiplyByThree = multiply.bind(this,3);
multiplyByThree(8)

