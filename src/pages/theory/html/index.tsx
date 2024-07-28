import React from "react";
import AccordionDemo from "@/components/Accordion";
import { HTMLTheory } from "@/lib/TheoryQueData/htmlTheoryData";

const index = () => {
  return (
    <section className="mx-auto py-20 md:py-20">
      <AccordionDemo data={HTMLTheory}  heading={"HTML"}/>
    </section>
  );
};

export default index;
