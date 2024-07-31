import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { AccordionDemoProps, TheoryProps } from "@/lib/types";
  
  export default function AccordionDemo({ data, heading }: AccordionDemoProps) {
    return (
      <Accordion
        type="single"
        collapsible
        className="container md:w-[700px] py-12 sm:py-16"
      >
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight flex items-center">
          <span className="text-primary mr-2">{heading}</span> Theory Questions
        </h3>
        {data.map(({ id, question, answer }: TheoryProps, index: number) => (
          <AccordionItem value={`item-${id}`} key={id}>
            <AccordionTrigger className="text-left">
              {index + 1}. {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }