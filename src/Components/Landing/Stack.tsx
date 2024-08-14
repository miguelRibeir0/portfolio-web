import { Card, CardContent } from '@/Components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/Components/ui/carousel';
import { Fade } from 'react-awesome-reveal';
import Typewriter from '../TypeWriting';
import { useInView } from 'react-intersection-observer';

const Stack = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <div
      className="w-1/2 flex m-auto items-center justify-center pt-20"
      ref={ref}
    >
      <Fade>
        <div>
          <div className="pl-10 pr-10 lg:p-0">
            <span className="mb-5 text-3xl font-bold flex gap-x-4">
              {inView && <Typewriter text="My Stack" />}
              {inView && (
                <Typewriter className="sm:hidden animate-pulse" text=">>" />
              )}
            </span>
            <div className="mb-20 lg:mb-5 h-32">
              {inView && (
                <Typewriter
                  text="My Main Stack is the MERN Stack (MongoDB, ExpressJS, React and
              NodeJS) but I also have experience with other technologies as you
              can check bellow."
                  speed={10}
                />
              )}
            </div>
          </div>
          <Carousel className="w-full m-auto">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 lg:basis-1/3 basis-1/2"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
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
