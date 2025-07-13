
import fleche from "../assets/fleches-vers-le-haut.png";


function ScrollToTopButton() {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top-button `}>
      <button onClick={scrollToTop} ><div className="HautDePage"><img src={fleche} id="fleche" alt="flêche"/></div><p className="HautDePage">Haut de page</p></button>
    </div>
  );

}
export default ScrollToTopButton;