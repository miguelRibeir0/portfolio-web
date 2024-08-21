import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { Fade } from "react-awesome-reveal";
import icons from "./IconsSVG";

const Stack = () => {
  return (
    <div className="m-auto flex w-1/2 items-center justify-center pt-20">
      <Fade>
        <div>
          <div className="lg:p-0">
            <span className="mb-5 flex gap-x-4 text-3xl font-bold">
              <h3>My Stack</h3>
              <p className="animate-pulse sm:hidden">&gt;&gt;</p>
            </span>
            <div className="mb-20 h-32 lg:mb-5">
              <p>
                My Main Stack is the MERN Stack (MongoDB, ExpressJS, React and
                NodeJS) but I also have experience with other technologies as
                you can check bellow.
              </p>
            </div>
          </div>
          <Carousel className="m-auto w-full">
            <CarouselContent className="-ml-1">
              {Array.from({ length: icons.length }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="w-[40px] pl-1 lg:basis-1/3"
                >
                  <div className="p-1 text-center">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={icons[index].path} className="select-none" />
                      </CardContent>
                    </Card>
                    <p className="mt-2">{icons[index].name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </Fade>
    </div>
  );
};

export default Stack;
