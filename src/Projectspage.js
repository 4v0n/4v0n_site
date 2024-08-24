import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Projectspage() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1 },
    );
  }, []);

  return (
    <div className="flex-grow flex items-center justify-center">
      <h1 ref={textRef} className="text-6x1 font-bold text-center">
          I'm working on it 👍
      </h1>
    </div>
  );
}

export default Projectspage;