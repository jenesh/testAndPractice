// "use strict";
let assert = require("assert");

let greeting;
function greet(name) {
  greeting = "hello";
  console.log(greeting + name);
}
// greet("Bruce");
function Person(name) {
  this.name = name;
}
let p = new Person("Kyle");
// console.log(p);
function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

function test1() {
  let p1 = new Vector(1, 2);

  assert.strictEqual(p1.x, 1, "p1.x should be 1");
  assert.strictEqual(p1.y, 3, "p1.y should be 2");
}

function test2() {
  let p1 = new Vector(1, 2);
  let p2 = new Vector(2, 4);
  let p3 = p1.plus(p2);

  assert.strictEqual(p3.x, 4, "p3.x");
  assert.strictEqual(p3.y, 6, "p3.y");
}

let tests = [test1, test2];
tests.forEach(test => {
  try {
    // test();
    // passed += 1;
  } catch (error) {
    console.log("--- Test Failed ---");
    console.log(
      error.message + " should be " + error.expected + " but is " + error.actual
    );
    console.log(error.stack.split("\n")[1]);
  }
});
// try {
//   test2();
// } catch (err) {
//   console.log("--- Test Failed ---");
//   console.log(
//     err.message + " should be " + err.expected + " but is " + err.actual
//   );
// }
// test2();
function addNumbers(num1, num2) {
  return num1 + num2;
}
function testF1() {
  assert.strictEqual(addNumbers(1, 2), 3);
}
function testF2() {
  assert.strictEqual(addNumbers(10, -1), 9);
}
function testF3() {
  assert.strictEqual(addNumbers(0, -4), -4);
}
let testArr = [testF1, testF2, testF3];
let passed = 0;
let failed = 0;
testArr.forEach(test => {
  try {
    // test();
    passed++;
  } catch (err) {
    console.log("Expected: " + err.expected + " | Your Output: " + err.actual);
    failed++;
  }
});
// console.log("---Total---");
// console.log(passed + " passed");
// console.log(failed + " failed");
// let testFunction = [addNumbers];
// testFunction.forEach(test => {
//   try {
//     test();
//   } catch (err) {
//     console.log(err.stack.split("\n")[1]);
//   }
// });

// Automated Tests
function runTests(tests) {
  let passed = 0;
  let failed = 0;

  tests.forEach(test => {
    try {
      test();
      passed++;
    } catch (error) {
      console.log("- - - Test Failed - - -");
      console.log(
        error.message +
          " should be " +
          error.expected +
          "but is " +
          error.actual
      );
      failed++;
    }
  });
  console.log("- - - Total - - -");
  console.log(passed + " passed");
  console.log(failed + " failed");
}

function auto() {
  // Complete the function below
  function reverse(arr) {
    // Code here..
    let newArr = [Infinity, -Infinity];
    for (let i = 0; arr.length; i++) {
      let curr = arr.pop();
      // console.log(curr);
      for (let j = 0; j < newArr.length; j++) {
        if (curr < newArr[j]) {
          if (curr > newArr[j + 1]) {
            newArr.splice(j + 1, 0, curr);
            // console.log(newArr);
            break;
          }
        }
      }
    }
    newArr.shift();
    newArr.pop();
    return newArr;
  }

  let result1 = reverse([1, 2, 3, 4, 5]).toString();
  let result2 = reverse([-1, 3, 2, 1, 0]);
  let result3 = reverse([9, 11, -11, 13]);

  assert.strictEqual(result1, "5,4,3,2,1");
  assert.strictEqual(result2, [3, 2, 1, 0, -1]);
  assert.strictEqual(result3, [13, 11, 9, -11]);
}

auto();

function reverse(arr) {
  // Code here..
  let newArr = [Infinity, -Infinity];
  for (let i = 0; arr.length; i++) {
    let curr = arr.pop();
    // console.log(curr);
    for (let j = 0; j < newArr.length; j++) {
      if (curr < newArr[j]) {
        if (curr > newArr[j + 1]) {
          newArr.splice(j + 1, 0, curr);
          // console.log(newArr);
          break;
        }
      }
    }
  }
  newArr.shift();
  newArr.pop();
  return newArr;
}
// console.log(
//   reverse([5, 4, 2, 3, 1, 0, -23, -12313, 0, 234, 234342314, , -32434234234])
// );
// let arrr = [1, 2, 3];
// let newArrr = [];
// let pop = arrr.pop();
// newArrr.splice(0, 0, pop);
// let pop2 = arrr.pop();
// newArrr.splice(0, 0, pop2);
// console.log(newArrr);
