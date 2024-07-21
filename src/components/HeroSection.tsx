import Link from "next/link";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-3xl md:text-7xl font-bold">
          Start Your Interview Preparation Journey
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg max-w-lg mx-auto">
          Discover essential resources and practice questions tailored only for
      frontend developers. Enhance your skills, ace interviews, and
          stay updated with the latest trends. Your path to frontend mastery
          starts here!
        </p>
        <div className="mt-4">
          <Link href={"#!"}>
            <Button variant={"default"} className="">
              Let&apos;s Start
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
