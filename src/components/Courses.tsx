import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Courses() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div>
                <div className="flex aspect-square items-center justify-center p-6">
                  <div className="w-12 h-12">
                    <span className="text-3xl font-semibold">{index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
