import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
// const iconMapping: { [key: string]: React.ComponentType } = {
//   html5: FaHtml5,
//   css3: FaCss3Alt,
//   javascript: FaJsSquare,
//   react: FaReact,
// };
const CardUI = ({ cardData }: any) => {
  // const IconComponent = iconMapping[icon];
  const { id, title, description, icon, href_quiz } = cardData;
  return (
    <div>
      <Link href={href_quiz} key={id}>
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
    </div>
  );
};

export default CardUI;
