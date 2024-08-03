import React from "react";
import AccordionDemo from "@/components/Accordion";
import { CSSTheory } from "@/lib/TheoryQueData/cssTheoryData";
import useDynamicTitle from "@/hooks/useDynamicTitle";

const index = () => {
  useDynamicTitle("Theory");
  return (
    <section className="mx-auto py-15 md:py-16">
      <AccordionDemo data={CSSTheory}  heading={"CSS"}/>
    </section>
  );
};

export default index;
