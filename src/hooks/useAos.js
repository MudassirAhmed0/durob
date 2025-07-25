import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
const UseAos = () => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init({
        duration: 800,
        once: true
      });
    }, 1500);
    return () => {
      Aos.refresh();
    };
  }, []);
};

export default UseAos;
