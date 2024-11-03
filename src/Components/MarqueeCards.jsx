import Marquee from "react-fast-marquee";
import { useRef, useEffect } from "react";

const MarqueeCards = ({ children, direction, scrollPosition }) => {
  const marqueeRef = useRef(null);

  // Set the scroll position when the component mounts or updates
  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollLeft = scrollPosition; // Set the scroll position directly
    }
  }, [scrollPosition]);

  return (
    <Marquee
      ref={marqueeRef}
      direction={direction}
      gradient={false}
      speed={30}
      pauseOnHover={true}
      style={{ overflow: 'hidden' }} // Ensure overflow is hidden to manage scroll
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
