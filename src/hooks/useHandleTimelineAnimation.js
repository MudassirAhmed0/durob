import { isInViewport } from "@/utils/isInViewport";
import React, { useEffect, useState } from "react";

const useHandleTimelineAnimation = (containerRef, svgRefs) => {
  const [inViewport, setInViewport] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const handleScroll = () => {
    if (containerRef?.current && !hasBeenInView) {
      const currentlyInView = isInViewport(containerRef?.current);
      if (currentlyInView && !hasBeenInView) {
        svgRefs.current.forEach((item) => {
          const pathLength = item?.getTotalLength();
          item.style.strokeDashoffset = pathLength + "px";
        });
        containerRef.current.classList.add("activeAnimation");

        setInViewport(true);
        setHasBeenInView(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    svgRefs.current.forEach((item) => {
      const pathLength = item?.getTotalLength();
      console.log(pathLength, "sa");
      item.style.strokeDasharray = pathLength + "px";
      item.style.strokeDashoffset = 0;
    });

    handleScroll(); // Check if component is in viewport when it mounts
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   useEffect(() => {
  //     if (inViewport) {
  //       svgRefs.current.forEach((item) => {
  //         const pathLength = item?.getTotalLength();
  //         item.style.strokeDashoffset = pathLength + "px";
  //       });
  //     }
  //   }, [inViewport]);
};

export default useHandleTimelineAnimation;
