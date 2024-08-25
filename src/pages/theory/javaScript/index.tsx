import React from "react";
import AccordionDemo from "@/components/Accordion";
import { JavaScriptTheory } from "@/lib/TheoryQueData/JsTheoryData";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const TheoryJS = () => {
  const headElement = useDocumentTitle("Interview Prep | Theory");
  return (
    <>
    {headElement}
    <section className="mx-auto py-15 md:py-16">
      <AccordionDemo data={JavaScriptTheory}  heading={"JavaScript"}/>
    </section>
    </>
  );
};

export default TheoryJS;
