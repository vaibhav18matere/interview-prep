import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionDemoProps, TheoryProps } from "@/lib/types";
import Image from "next/image";

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
          <AccordionContent>
            {answer}
            <br />
            <br />
            <div className="flex gap-10">
              <a
                href={`https://www.perplexity.ai/search?q=${encodeURIComponent(
                  question
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-dark hover:underline flex gap-2.5 text-center items-center"
              >
                <Image
                  src={"/perplexityIcon.png"}
                  alt={""}
                  width={25}
                  height={25}
                ></Image>
                Ask Perplexity
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
