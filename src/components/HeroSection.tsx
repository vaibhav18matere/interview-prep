"use client";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container w-full h-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-12 md:py-12 ">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge className="animate-blink">New</Badge>
            </span>
            <span> Questions added recently </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold pt-5">
            <h1>
              Start
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Your Interview Preparation
              </span>
              Now
            </h1>
          </div>
          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground py-8">
            {`Discover essential resources, ace interviews by practicing questions, and stay updated with the latest trends to enhance your frontend skills. Your path to frontend mastery starts here!`}
          </p>

          {/* <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Enhance your skills, ace interviews, and
          stay updated with the latest trends. Your path to frontend mastery
          starts here!`}
          </p> */}

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-5/6 md:w-1/4 font-bold outline-slate-800"
            >
              <Link href="https://github.com" target="_blank">
                Github respository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
