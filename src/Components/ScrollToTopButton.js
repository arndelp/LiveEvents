import React, { useState, useEffect } from "react";
import "../style/ScrollToTopButton.css";
import fleche from "../assets/fleches-vers-le-haut.png";


function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 1000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top-button ${visible ? "visible" : ""}`}>
      <button onClick={scrollToTop} ><div className="HautDePage"><img src={fleche} id="fleche" alt="flêche"/></div><p className="HautDePage">Haut de page</p></button>
    </div>
  );
}

export default ScrollToTopButton;