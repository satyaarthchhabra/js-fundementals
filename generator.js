console.log("generator function is here ");

//  a generator is a function that can stop midway and then continue from where it stopped.
// Generators are a special class of functions that simplify the task of writing iterators.
// A generator is a function that produces a sequence of results instead of a single value, i.e you generate ​a series of values.
function * iterableObj() {
    yield 'This';
    yield 'is';
    yield 'iterable.'
  }
  for (const val of iterableObj()) {
    console.log(val);
  }
  // This
  // is 
  // iterable.

  function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2
    console.log('I will be printed after the pause');  
    yield 'World!';
  }
  const generatorObject = generatorFunction(); // Line 3
  console.log(generatorObject.next().value); // Line 4
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6
  // This will be executed first.
  // Hello, 
  // I will be printed after the pause
  // World!
  // undefined