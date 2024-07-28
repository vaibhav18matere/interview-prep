import React from "react";
import AccordionDemo from "@/components/Accordion";
import { CSSTheory } from "@/lib/TheoryQueData/cssTheoryData";

const index = () => {
  return (
    <section className="mx-auto py-20 md:py-20">
      <AccordionDemo data={CSSTheory}  heading={"CSS"}/>
    </section>
  );
};

export default index;
