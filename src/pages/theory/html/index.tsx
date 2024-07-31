import React from "react";
import AccordionDemo from "@/components/Accordion";
import { HTMLTheory } from "@/lib/TheoryQueData/htmlTheoryData";

const index = () =>  (
    <section className="mx-auto py-15 md:py-18">
      <AccordionDemo data={HTMLTheory}  heading={"HTML"}/>
    </section>
)

export default index;
