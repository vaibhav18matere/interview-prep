import AccordionDemo from "@/components/Accordion";
import { ReactJSTheory } from "@/lib/TheoryQueData/reactJSTheoryData";
import useDynamicTitle from "@/hooks/useDynamicTitle";

const index = () => {
  useDynamicTitle("Theory");
  return (
    <section className="mx-auto py-15 md:py-16">
      <AccordionDemo data={ReactJSTheory} heading={"React"}/>
    </section>
  );
};

export default index;
