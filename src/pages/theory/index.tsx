import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { topics } from "@/lib/data";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
// const iconMapping: { [key: string]: React.ComponentType } = {
//   html5: FaHtml5,
//   css3: FaCss3Alt,
//   javascript: FaJsSquare,
//   react: FaReact,
// };

const theory = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8  py-8">
          Theory Questions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map(({ id, title, description, icon, href }, index) => {
            // const IconComponent = iconMapping[icon];
            return (
              <Link href={href} key={id}>
                <Card className="h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-muted/50 dark:bg-card transform hover:-translate-y-1 hover:scale-105">
                  <CardHeader className="flex flex-col justify-center items-center">
                    <div className="bg-primary/20 p-4 rounded-full ring-8 ring-primary/10 mb-4 transition-all duration-300 hover:ring-primary/20">
                      {/* <IconComponent
                        size={40}
                        className="text-primary transition-all duration-300 hover:text-primary-dark"
                      /> */}
                    </div>
                    <CardTitle className="text-center text-xl font-bold text-gray-800 dark:text-white transition-all duration-300 hover:text-primary">
                      {title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-muted-foreground text-lg text-center font-sans">
                    {description}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default theory;
{
  /* <Card className="h-full bg-background border-0 shadow-none">
<CardHeader className="flex justify-center items-center">
  <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
    <Icon
      name={icon as keyof typeof icons}
      size={24}
      color="hsl(var(--primary))"
      className="text-primary"
    />
  </div>

  <CardTitle className="text-center">{title}</CardTitle>
</CardHeader>

<CardContent className="text-muted-foreground text-center">
  {description}
</CardContent>
</Card> */
}
