import React from "react";
import AccordionDemo from "@/components/Accordion";
import { HTMLTheory } from "@/lib/TheoryQueData/htmlTheoryData";
import useDynamicTitle from "@/hooks/useDynamicTitle";

const index = () =>  {
  useDynamicTitle("Theory");
  return(
    <section className="mx-auto py-15 md:py-16">
      <AccordionDemo data={HTMLTheory}  heading={"HTML"}/>
    </section>
)}

export default index;
