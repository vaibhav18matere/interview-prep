import { TheoryProps } from "../types";

export const ReactJSTheory: TheoryProps[] = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their application efficiently through a virtual DOM."
  },
  {
    id: 2,
    question: "What is a component in React?",
    answer: "A component is a self-contained module that renders some output. It can be either a class-based or functional component. Components can accept inputs (props) and manage their own state."
  },
  {
    id: 3,
    question: "What is the difference between state and props in React?",
    answer: "State is managed within a component and can change over time, while props are passed from a parent component to a child component and are immutable within the child component."
  },
  {
    id: 4,
    question: "What is the virtual DOM in React?",
    answer: "The virtual DOM is a lightweight copy of the real DOM. React uses the virtual DOM to optimize updates by first updating the virtual DOM and then applying changes to the real DOM in an efficient manner."
  },
  {
    id: 5,
    question: "What are hooks in React?",
    answer: "Hooks are functions that let you use state and other React features in functional components. Common hooks include useState, useEffect, and useContext. They allow for cleaner and more functional component logic."
  },
  {
    id: 6,
    question: "What is JSX?",
    answer: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML elements and components in a JavaScript file. It is used to describe what the UI should look like."
  },
  {
    id: 7,
    question: "What is the purpose of the useEffect hook?",
    answer: "The useEffect hook is used to perform side effects in functional components. It can be used to fetch data, update the DOM, or set up subscriptions. It runs after the component renders and can be configured to run only when certain dependencies change."
  }
];