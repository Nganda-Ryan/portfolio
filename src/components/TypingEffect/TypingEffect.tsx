"use client"
import { ReactTyped } from "react-typed";

interface TypingEffectProps {
  texts: string[];
}

const TypingEffect: React.FC<TypingEffectProps> = ({texts}) => {
  return (
    <ReactTyped
      strings={texts}
      typeSpeed={50}
      backSpeed={50}
      backDelay={2500}
      loop
      smartBackspace
    />
  );
};

export default TypingEffect;
