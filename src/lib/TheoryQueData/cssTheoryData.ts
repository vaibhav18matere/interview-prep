import { TheoryProps } from "../types";

export const CSSTheory: TheoryProps[] = [
  {
    id: 1,
    question: "What is CSS?",
    answer: "CSS stands for Cascading Style Sheets. It is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS controls the layout, colors, fonts, and overall visual appearance of web pages.",
  },
  {
    id: 2,
    question: "How can you include CSS in an HTML document?",
    answer: "CSS can be included in an HTML document in three ways: 1️⃣ Inline styles, using the `style` attribute within HTML tags. 2️⃣ Internal styles, using the `<style>` tag within the `<head>` section of the HTML document. 3️⃣ External styles, linking to an external CSS file using the `<link>` tag in the `<head>` section.",
  },
  {
    id: 3,
    question: "What are selectors in CSS?",
    answer: "Selectors in CSS are patterns used to select the elements you want to style. Examples include element selectors (e.g., `div`), class selectors (e.g., `.class-name`), and id selectors (e.g., `#id-name`). Selectors determine which HTML elements the CSS rules apply to.",
  },
  {
    id: 4,
    question: "What is the CSS box model?",
    answer: "The CSS box model describes how the elements on a webpage are structured and how their dimensions are calculated. It consists of the following parts: `content` (the actual content), `padding` (space between the content and the border), `border` (the line around the padding), and `margin` (space outside the border).",
  },
  {
    id: 5,
    question: "What is the purpose of the `z-index` property?",
    answer: "The `z-index` property controls the stacking order of positioned elements (elements with a `position` value other than `static`). Elements with a higher `z-index` value are displayed in front of elements with a lower `z-index` value.",
  },
  {
    id: 6,
    question: "What are pseudo-classes in CSS?",
    answer: "Pseudo-classes in CSS are used to define the special states of an element. Examples include `:hover` (applied when an element is hovered over), `:focus` (applied when an element has focus), and `:nth-child()` (applied based on the element's position within a parent).",
  },
  {
    id: 7,
    question: "What is the difference between `class` and `id` selectors in CSS?",
    answer: "In CSS, `class` selectors (e.g., `.class-name`) can be applied to multiple elements and can be reused throughout a document. `id` selectors (e.g., `#id-name`) are unique and should only be applied to a single element per page. `id` selectors have higher specificity than `class` selectors.",
  },
  {
    id: 8,
    question: "What are media queries in CSS?",
    answer: "Media queries are used in CSS to apply styles based on the conditions like viewport width, device type, or screen resolution. They allow for responsive design, where the layout and appearance of a webpage adjust according to the device or screen size. Example: `@media (max-width: 600px) { /* styles */ }`.",
  },
  {
    id: 9,
    question: "What is Flexbox in CSS?",
    answer: "Flexbox, or the Flexible Box Layout, is a layout model in CSS designed to create complex layouts with ease and alignment of elements within a container. It provides flexible ways to distribute space and align items, both horizontally and vertically, within a container.",
  },
  {
    id: 10,
    question: "What are CSS variables?",
    answer: "CSS variables, also known as custom properties, allow you to define reusable values that can be referenced throughout your stylesheet. They are declared using the `--` syntax and can be used with the `var()` function. Example: `--main-color: #3498db;` and usage: `color: var(--main-color);`.",
  },
];