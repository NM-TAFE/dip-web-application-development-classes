// Styled component
import React, { useState, useEffect } from "react";

export default function StyledComponent() {
  const [animationDuration, setAnimationDuration] = useState(3);

  useEffect(() => {
    console.log(`Component state ${animationDuration}`);
    return () => {
      console.log(`Component state ${animationDuration}`);
    };
  }, [animationDuration]);

  return (
    <section className="box">
      <section
        className="animatedSection box"
        style={{
          animation: `fadeInScale ${animationDuration}s ease-n-out infinite`,
        }}
      >
        This is a styled section with animation
      </section>{" "}
      <section className="box">
        <button
          className="button is-primary"
          onClick={() => setAnimationDuration(animationDuration + 1)}
        >
          Slow Me Down
        </button>
      </section>
    </section>
  );
}
