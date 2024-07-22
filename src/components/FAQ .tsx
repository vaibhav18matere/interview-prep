import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
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

export const FAQ = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
