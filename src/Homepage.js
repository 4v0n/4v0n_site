import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Card from "./Card";

function Homepage() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1 },
    );
  }, []);

  return (
    <div ref={textRef} className="flex-grow flex items-center justify-center">
      <Card
        thumbnail="https://avatars.githubusercontent.com/u/90649313?v=4"
        thumbnailShape="circle"
        title="Welcome!"
        description="Welcome to my very empty website!"
        footer="Expect more soon!"
      />
    </div>
  );
}

export default Homepage;