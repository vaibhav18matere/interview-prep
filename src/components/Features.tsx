import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { featureList } from "@/lib/data";

export const Features = () => {
  return (
    <section id="features" className="container">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        By the Developers, For the Developers
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Real-world interview scenarios and detailed explanations to help you
        excel in your interview
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 scale-95">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-none rounded-3xl shadow-none hover:shadow-cardcustom transition-shadow duration-300">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center pt-2">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
