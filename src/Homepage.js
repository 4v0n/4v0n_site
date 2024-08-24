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
    <div className="flex-grow flex items-center justify-center">
      <Card
        thumbnail="https://via.placeholder.com/150"
        title="Card Title"
        titleUrl="https://example.com"
        description="This is a description of the card. It provides more details about the content."
        footer="this is some text"
        thumbnailShape="circle"
        thumbnailSize="w-24 h-24"
      />
    </div>
  );
}

export default Homepage;