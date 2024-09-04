import CardUI from "@/components/CardUI";
import { topics } from "@/lib/data";

const theory = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8  py-8">
          Theory Questions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((cardData) => {
            return <CardUI cardData={cardData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default theory;
