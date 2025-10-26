
function ScrollToTopButton() {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-to-top-button `}>
      <button onClick={scrollToTop} ><div className="HautDePage"><img src={`${process.env.PUBLIC_URL}/assets/fleches-vers-le-haut.png`} id="fleche" alt="flêche" width={32} height={32}/></div><p className="HautDePage">Haut de page</p></button>
    </div>
  );

}
export default ScrollToTopButton;