import { TheoryProps } from "../types";

export const JavaScriptTheory: TheoryProps[] = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer: "JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."
  },
  {
    id: 2,
    question: "What is the difference between `let`, `const`, and `var`?",
    answer: "`var` is function-scoped, `let` is block-scoped, and `const` is block-scoped and cannot be reassigned. `var` declarations are hoisted, while `let` and `const` declarations are not hoisted."
  },
  {
    id: 3,
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It allows for the preservation of state and data privacy."
  },
  {
    id: 4,
    question: "What is the use of promises in JavaScript?",
    answer: "Promises are used to handle asynchronous operations in JavaScript. They represent an operation that hasn't completed yet but is expected to in the future. They can be in one of three states: pending, fulfilled, or rejected."
  },
  {
    id: 5,
    question: "What are arrow functions?",
    answer: "Arrow functions are a shorthand syntax for writing function expressions in JavaScript. They do not have their own `this` context and are often used to maintain the context of `this` from the enclosing lexical scope."
  },
  {
    id: 6,
    question: "What is event delegation?",
    answer: "Event delegation is a technique involving event listeners to handle events at a higher level in the DOM than the element on which the event originated. It allows for cleaner code and better performance."
  },
  {
    id: 7,
    question: "What is the difference between `==` and `===`?",
    answer: "`==` is the abstract equality operator that compares only the values after converting them to a common type. `===` is the strict equality operator that compares both the value and the type without type conversion."
  }
]