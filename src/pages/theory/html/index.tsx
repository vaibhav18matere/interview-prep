import React from "react";
import AccordionDemo from "@/components/Accordion";
import { HTMLTheory } from "@/lib/TheoryQueData/htmlTheoryData";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const TheoryHTML = () =>  {
  const headElement = useDocumentTitle("Interview Prep | Theory");
  return(
    <>
    {headElement}
    <section className="mx-auto py-15 md:py-16">
      <AccordionDemo data={HTMLTheory}  heading={"HTML"}/>
    </section>
    </>
)}

export default TheoryHTML;
