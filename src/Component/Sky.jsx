import React, { useEffect, useRef } from "react";
function generateStars(numStars) {
    const stars = [];
  
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      stars.push(star);
    }
  
    return stars;
}
export default function StarField() {
  const skyRef = useRef(null);

  useEffect(() => {
    const numStars = 80;
    const stars = generateStars(numStars);

    stars.forEach((star) => skyRef.current.appendChild(star));
  }, []);

  return <div className="sky" ref={skyRef} />;
}
