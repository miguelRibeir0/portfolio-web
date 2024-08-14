import GitHub from '../../assets/Github.svg';
import CV from '../../assets/CV.svg';
import { Fade } from 'react-awesome-reveal';
import Typewriter from '../TypeWriting';
import { useInView } from 'react-intersection-observer';

const End = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <Fade>
      <div className="flex flex-col items-center justify-center mt-20 pl-12 pr-12">
        <div className="flex gap-x-3" ref={ref}>
          {inView && (
            <Typewriter
              text="To see how I have been using my stack click in the projects tab at the top of the page."
              speed={20}
            />
          )}
        </div>
        <div className="flex items-start justify-center mt-16 gap-x-10">
          <img src={GitHub} className="w-16 cursor-pointer" />
          <img src={CV} className="w-16 cursor-pointer" />
        </div>
      </div>
    </Fade>
  );
};

export default End;
