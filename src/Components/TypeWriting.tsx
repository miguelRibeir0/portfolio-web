import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 1;
    const typingInterval = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;

      if (i > text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText}</p>;
};

export default Typewriter;
