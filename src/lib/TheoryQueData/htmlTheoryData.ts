import { TheoryProps } from "../types";

export const HTMLTheory: TheoryProps[] = [
  {
    id: 1,
    question:
      "What is HTML?",
    answer:
      "HTML stands for HyperText Markup Language. It is a standard text formatting language used for developing web pages released in 1993. HTML is a language that is interpreted by the browser and it tells the browser what to display and how to display.",
  },
  {
    id: 2,
    question: "Can we display a web page inside a web page or Is nesting of webpages possible?",
    answer: "Yes, we can display a web page inside another HTML web page. HTML provides a tag <iframe> using which we can achieve this functionality.",
  },
  {
    id: 3,
    question:
      "What are tags and attributes in HTML?",
    answer: "Tags are the primary component of the HTML that defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element. For example, <p align=” center”>Interview questions</p>, in this the ‘align’ is the attribute using which we will align the paragraph to show in the center of the view",
  },
  {
    id: 4,
    question: "HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example <br />, <img />, <hr />, etc.",
    answer:
      "as children of <body>, <article>, <aside>, <nav>, and <section> tags",
  }, 
  {
    id: 5,
    question: "What is the advantage of collapsing white space?",
    answer: "In HTML, a blank sequence of whitespace characters is treated as a single space character, Because the browser collapses multiple spaces into a single space character and this helps a developer to indent lines of text without worrying about multiple spaces and maintain readability and understandability of HTML codes"
  },
  {
    id: 6,
    question: "What is the ‘class’ attribute in HTML?",
    answer: "The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements."
  },
  {
    id: 7,
    question: "What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?",
    answer: "Multiple elements in HTML can have the same class value, whereas a value of id attribute of one element cannot be associated with another HTML element."
  },
  {
    id: 8,
    question: "Define multipart form data?",
    answer: "Multipart form data is one of the values of the enctype attribute. It is used to send the file data to the server-side for processing. The other valid values of the enctype attribute are text/plain and application/x-www-form-urlencoded."
  },
  {
    id: 9,
    question: "What are the different kinds of Doctypes available?",
    answer: "The three kinds of Doctypes which are available: 1️⃣ Strict Doctype, 2️⃣ Transitional Doctype,3️⃣ Frameset Doctype"
  },
  {
    id: 10,
    question: "What is the significance of <head> and <body> tag in HTML?",
    answer: "<head> tag provides the information about the document. It should always be enclosed in the <html> tag. This tag contains the metadata about the webpage and the tags which are enclosed by head tag like <link>, <meta>, <style>, <script>, etc. are not displayed on the web page. Also, there can be only 1 <head> tag in the entire Html document and will always be before the <body> tag."
  },
];