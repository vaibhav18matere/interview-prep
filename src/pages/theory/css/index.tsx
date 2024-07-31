import React from "react";
import AccordionDemo from "@/components/Accordion";
import { CSSTheory } from "@/lib/TheoryQueData/cssTheoryData";

const index = () => {
  return (
    <section className="mx-auto py-15 md:py-18">
      <AccordionDemo data={CSSTheory}  heading={"CSS"}/>
    </section>
  );
};

export default index;
