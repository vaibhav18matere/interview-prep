import { FeaturesProps } from "./types";
import { CompaniesListProps } from "./types";
import { ReviewProps } from "./types";
import { FAQProps } from "./types";
import { TopicsProps } from "./types";

export const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Comprehensive Question Bank",
    description:
      "A robust collection of interview questions covering HTML, CSS, JavaScript, and frontend frameworks like React, Angular, and Vue.js. Each question is accompanied by detailed answers and explanations to help users understand the concepts thoroughly. The questions range from beginner to advanced levels, catering to all skill levels",
  },
  {
    icon: "BadgeCheck",
    title: "Interactive Coding Challenges",
    description:
      "Engaging coding challenges that simulate real-world scenarios. These challenges help users practice their coding skills in a hands-on environment. Each challenge comes with instant feedback and solutions to ensure users learn effectively and can improve their problem-solving abilities.",
  },
  {
    icon: "Goal",
    title: "Quizzes and Assessments",
    description:
      "Regular quizzes and assessments to test knowledge and track progress. These assessments cover various topics and are designed to help users identify their strengths and weaknesses. Detailed results and explanations are provided to aid in continuous learning and improvement.",
  },
  {
    icon: "PictureInPicture",
    title: "Machine Coding Round Practice",
    description:
      "Specially curated machine coding problems that mimic the types of problems often encountered in technical interviews. Users can practice building complete applications or features, focusing on code quality, efficiency, and problem-solving skills. This feature helps in preparing for high-stakes coding interviews.",
  },
  {
    icon: "MousePointerClick",
    title: "Mock Interview Sessions",
    description:
      "Simulated interview sessions with real-time feedback. Users can schedule mock interviews to practice speaking about their solutions, explaining their thought process, and answering follow-up questions. These sessions help build confidence and improve communication skills, which are crucial during actual interviews.",
  },
  {
    icon: "Newspaper",
    title: "Resource Library",
    description:
      "A vast library of resources, including articles, tutorials, and reference guides. The library covers essential frontend development topics, best practices, and the latest industry trends. Users can access these resources to supplement their learning and stay updated with the latest developments in the field.",
  },
];

export const companiesList: CompaniesListProps[] = [
  {
    icon: "Crown",
    name: "Adobe",
  },
  {
    icon: "Vegan",
    name: "Amazon",
  },
  {
    icon: "Ghost",
    name: "Facebook ",
  },
  {
    icon: "Puzzle",
    name: "Freshworks",
  },
  {
    icon: "Squirrel",
    name: "Google",
  },
  {
    icon: "Cookie",
    name: "iManage",
  },
  {
    icon: "Drama",
    name: "Microsoft",
  },
  {
    icon: "Crown",
    name: "Netflix",
  },
  {
    icon: "Vegan",
    name: "Oracle",
  },
  {
    icon: "Ghost",
    name: "Razorpay ",
  },
  {
    icon: "Squirrel",
    name: "Salesforce",
  },
  {
    icon: "Cookie",
    name: "SAP",
  },
  {
    icon: "Drama",
    name: "Zoho Corporation",
  },
];

export const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Karthik Kumar",
    userName: "Product Manager",
    comment:
      "I was struggling to find good resources for my frontend interview preparation until I found this website. The interactive coding challenges are super helpful, and the detailed explanations make complex concepts so easy to understand. Thanks to this site, I felt confident and well-prepared during my interviews! ",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Anjali Mehta",
    userName: "Cybersecurity Analyst",
    comment:
      "This platform is a game-changer! The mock interview sessions really helped me improve my communication skills and answer questions more effectively. I also loved the machine coding round practice – it mimics real interview scenarios perfectly. Highly recommend it to anyone preparing for frontend developer roles.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Arjun Nair",
    userName: "Chief Technology Officer",
    comment:
      "The comprehensive question bank and regular quizzes are fantastic! They helped me identify my weak areas and work on them systematically. I appreciated the instant feedback on coding challenges, which guided me in the right direction. This site is a must-visit for every frontend developer aspirant.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Neha Kapoor",
    userName: "Data Scientist",
    comment:
      "The combination of theory and practical challenges on this platform is excellent. The machine coding problems were particularly helpful in giving me a taste of real interview scenarios. I also enjoyed the mock interviews, they boosted my confidence and prepared me for the actual interview environment.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Vikram Joshi",
    userName: "IT Project Manager",
    comment:
      "What I love about this site is the personalized feedback on coding challenges. It really helped me improve my coding style and efficiency. The quizzes and assessments are also great for tracking progress. Overall, it is a fantastic resource for anyone looking to ace frontend developer interviews.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Rahul Verma",
    userName: "DevOps Engineer",
    comment:
      "This website is a gem for frontend developers! The interactive quizzes and detailed tutorials made learning fun and effective. I particularly loved the machine coding practice rounds—they gave me a real sense of what to expect in actual interviews. The platform’s focus on real-world scenarios and personalized feedback truly sets it apart. ",
    rating: 4.9,
  },
];

export const FAQList: FAQProps[] = [
  {
    question: "Is it free?",
    answer: "Yes. It is completely free and will free for use forever",
    value: "item-1",
  },
  {
    question: "What topics are covered on this platform?",
    answer:
      "Our platform covers a wide range of topics including HTML, CSS, JavaScript, and popular frontend frameworks like React, Angular, and Vue.js. We also provide resources on algorithms, data structures, and system design relevant to frontend development.",
    value: "item-2",
  },
  {
    question: "How do the mock interview sessions work?",
    answer:
      "Mock interview sessions are simulated interviews conducted by experienced professionals. During these sessions, you'll answer questions and solve problems in real-time, receiving instant feedback on your performance to help you improve.",
    value: "item-3",
  },
  {
    question: "Are the coding challenges suitable for all skill levels?",
    answer:
      "Yes, our coding challenges are designed to cater to all skill levels, from beginners to advanced developers. Each challenge comes with a detailed solution and explanation to ensure you can learn effectively regardless of your experience level.",
    value: "item-4",
  },
  {
    question: "Can I track my progress on the platform?",
    answer:
      "Absolutely! Our platform includes regular quizzes and assessments that allow you to track your progress. You'll receive detailed results and feedback to help you identify areas for improvement and monitor your growth over time.",
    value: "item-5",
  },
  {
    question: "Is there a resource library available for additional learning?",
    answer:
      "Yes, we offer a vast resource library that includes articles, tutorials, and reference guides. These resources cover essential frontend development topics, best practices, and the latest industry trends to supplement your learning.",
    value: "item-6",
  },
  {
    question: "How often is the content updated?",
    answer:
      "We regularly update our content to ensure it stays relevant and up-to-date with the latest trends and technologies in frontend development. Our team continuously adds new questions, coding challenges, and resources to keep your preparation fresh and comprehensive",
    value: "item-7",
  },
];

export const topics: TopicsProps[] =  [
  { title: 'HTML', description: 'Understand the structure and semantics of HTML.', icon: 'html5', href: '/theory/html' },
  { title: 'CSS', description: 'Learn styling and layout techniques using CSS.', icon: 'css3', href: '/theory/css' },
  { title: 'JavaScript', description: 'Dive into JavaScript programming and ES6 features.', icon: 'javascript', href: '/theory/javaScript' },
  { title: 'React', description: 'Explore React concepts, components, and hooks.', icon: 'react', href: '/theory/react' }
];