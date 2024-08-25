import React from "react";
import AccordionDemo from "@/components/Accordion";
import { CSSTheory } from "@/lib/TheoryQueData/cssTheoryData";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const TheoryCSS = () => {
  const headElement = useDocumentTitle("Interview Prep | Theory");
  return (
    <>
    {headElement}
    <section className="mx-auto py-15 md:py-16">
      <AccordionDemo data={CSSTheory}  heading={"CSS"}/>
    </section>
    </>
  );
};

export default TheoryCSS;
