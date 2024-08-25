import AccordionDemo from "@/components/Accordion";
import { ReactJSTheory } from "@/lib/TheoryQueData/reactJSTheoryData";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const TheoryReact = () => {
  const headElement = useDocumentTitle("Interview Prep | Theory");
  return (
    <>
    {headElement}
    <section className="mx-auto py-15 md:py-16">
      <AccordionDemo data={ReactJSTheory} heading={"React"}/>
    </section>
    </>
  );
};

export default TheoryReact;
