import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { topics } from "@/lib/data";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
const iconMapping: { [key: string]: React.ComponentType } = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJsSquare,
  react: FaReact,
};

const theory = () => {
  return (
    <div className="min-h-screen p-8 py-28">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Theory Questions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {topics.map(({ title, description, icon, href }, index) => {
            const IconComponent = iconMapping[icon];
            return (
              <Link href={href}>
                <Card className="h-full border-1 shadow-lg hover:shadow-orange-100 transition-all bg-muted/50 dark:bg-card">
                  <CardHeader className="flex justify-center items-center">
                    <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                    <IconComponent size={24} className="text-primary" />
                    </div>

                    <CardTitle className="text-center">{title}</CardTitle>
                  </CardHeader>

                  <CardContent className="text-muted-foreground text-center">
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
