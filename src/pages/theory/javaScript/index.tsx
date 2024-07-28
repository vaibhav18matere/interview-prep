import React from "react";
import AccordionDemo from "@/components/Accordion";
import { JavaScriptTheory } from "@/lib/TheoryQueData/JsTheoryData";
const index = () => {
  return (
    <section className="mx-auto py-20 md:py-20">
      <AccordionDemo data={JavaScriptTheory}  heading={"JavaScript"}/>
    </section>
  );
};

export default index;
