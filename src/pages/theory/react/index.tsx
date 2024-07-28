import React from "react";
import AccordionDemo from "@/components/Accordion";
import { ReactJSTheory } from "@/lib/TheoryQueData/reactJSTheoryData";

const index = () => {
  return (
    <section className="mx-auto py-20 md:py-20">
      <AccordionDemo data={ReactJSTheory} heading={"React"}/>
    </section>
  );
};

export default index;
