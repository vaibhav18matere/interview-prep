import AccordionDemo from "@/components/Accordion";
import { ReactJSTheory } from "@/lib/TheoryQueData/reactJSTheoryData";
import React from "react";

const index = () => {
  return (
    <section className="mx-auto py-15 md:py-18">
      <AccordionDemo data={ReactJSTheory} heading={"React"}/>
    </section>
  );
};

export default index;
