import { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";



function calcDY(angle, dx) {
  const radian = angle * (Math.PI / 100);

  return Math.tan(radian) * dx;
}

function ScrollingTextBg() {

  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: "-100%" },
      {
        x: "100%",
        duration: 10,
        repeat: -1,
        ease: "linear",
      },
    );
  }, []);

  return (
    <div className="absolute inset-0 flex overflow-hidden">
      <h1
        ref={textRef}
        className="font-bold text-gray-200 opacity-20 whitespace-nowrap"
      >
        Background Text
      </h1>
    </div>
  );
}

export default ScrollingTextBg;