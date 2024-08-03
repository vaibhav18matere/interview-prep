import React from "react";
import AccordionDemo from "@/components/Accordion";
import { JavaScriptTheory } from "@/lib/TheoryQueData/JsTheoryData";
import useDynamicTitle from "@/hooks/useDynamicTitle";

const index = () => {
  useDynamicTitle("Theory");
  return (
    <section className="mx-auto py-15 md:py-16">
      <AccordionDemo data={JavaScriptTheory}  heading={"JavaScript"}/>
    </section>
  );
};

export default index;
