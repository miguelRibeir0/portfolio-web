import Typewriter from '../TypeWriting';
import { Fade } from 'react-awesome-reveal';
import { useInView } from 'react-intersection-observer';

const ShortAbout = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <div
      className="w-full h-72 flex items-center justify-center pr-12 pl-12"
      ref={ref}
    >
      <div className="lg:w-1/2 w-full">
        <Fade>
          {inView && (
            <Typewriter
              text="Hi! I'm a full-stack developer from Portugal with a passion for the world of web development and all of it's capabilities. I have experience working with a variety of technologies and am always looking to learn more. I'm currently looking for new opportunities to grow and develop my skills."
              speed={10}
            />
          )}
        </Fade>
      </div>
    </div>
  );
};

export default ShortAbout;
