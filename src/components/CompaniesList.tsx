"use client";

import { Icon } from "./ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import { companiesList } from "@/lib/data";

export const CompaniesList = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto py-12 sm:py-32">
      <h2 className="text-lg md:text-xl text-center mb-6 text-primary tracking-wider">
        Questions to prepare for top companies like
      </h2>

      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]">
          {companiesList.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="white"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
