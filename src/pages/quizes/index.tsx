import CardUI from "@/components/CardUI";
import { topics } from "@/lib/data";

const quizes = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8  py-8">
          Quizes 🧩
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((item) => {
            return (
              <CardUI cardData={item}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default quizes;
