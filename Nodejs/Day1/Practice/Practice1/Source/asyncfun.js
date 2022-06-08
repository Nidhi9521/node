//Simple function 
function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  a = addSquares(2, 3); // returns 13
  b = addSquares(3, 4); // returns 25
  c = addSquares(4, 5); // returns 41

  console.log(a);
  console.log(b);
  console.log(c);



const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')


//closer example
function greeting(message) {
  return function(name){
       return message + ' ' + name;
  }
}
let sayHi = greeting('Hi');
let sayHello = greeting('Hello');

console.log(sayHi('John')); // Hi John
console.log(sayHello('akash'));