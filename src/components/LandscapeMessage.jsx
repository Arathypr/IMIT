import React, { useEffect, useState } from "react";
import "../components/style.css";

const LandscapeMessage= () => {
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  const isMobile = window.innerWidth <= 768;
  const isLandscape = window.innerWidth > window.innerHeight;

  return (
    isMobile &&
    isLandscape &&
    !isPortrait && (
      <div className="orientation-message">
        <p>Please rotate to portrait mode.</p>
      </div>
    )
  );
};

export default LandscapeMessage;
