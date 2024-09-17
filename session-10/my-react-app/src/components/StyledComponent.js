import React, {useState, useEffect} from 'react'
export default function StyledComponent() {
  const [animationDuration, setAnimationDuration] = useState(3)

  useEffect(() => {
    console.log(`Component mounted ${animationDuration}`);

    return () => {
      console.log(`Component unmounted ${animationDuration}`);
    }
  }, [animationDuration])

    return (
      <>
        <section className="animatedSection" style={{animation: `fadeInScale ${animationDuration}s ease-in-out infinite`}}>
        This is a styled section with animation
        </section>
        <button className="button is-primary" onClick={() => setAnimationDuration(animationDuration + 1)}>Click Me</button>
      </>
    );
  }