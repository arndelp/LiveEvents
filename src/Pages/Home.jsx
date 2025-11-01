import ConcertHomePage from "../Components/ConcertHomePage.jsx"
import BannerAlert from "../Components/BannerAlert.jsx"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import {  HiShoppingCart } from "react-icons/hi";
import ScrollToTopButton from "../Components/ScrollToTopButton.jsx";
import { lazy, Suspense, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

//pour améliorer les performances, chargement lazy de la googlemap
const GoogleMap = lazy(() => import("../Components/GoogleMap.tsx"));

function Home() {

   const { customer,isAuthenticated } = useContext(AuthContext);
/*Fonction du bouton Billetterie */
    function Billet() {   
        return ( 
              
          <div className="row mb-20 mt-20" >
            <div className="boutonBilletHome ">
            <Link to="/Billetterie">
              <Button size="xl" gradientDuoTone="redToYellow" >
                <HiShoppingCart className="mr-2 h-10 w-10" />
                  Billetterie
              </Button>             
            </Link>
            </div>
          </div>
      
            )
      }

    return ( 
        <>
       
      <div className="background " style={{overflow: "hidden"}}>
        <div className="row">
          <BannerAlert /> 
          </div>
          
        <div className="row">
          {isAuthenticated() ? (
            <>
              <h1 className="titleUser pt-3">Bonjour {customer?.firstname  || ""} {customer?.lastname || ""}</h1><h2> les concerts suivants devraient vous convenir:</h2>
            </>
          ) : (
          <h1 className="title pt-3">NATION SOUNDS</h1>
        
          )}
          </div>
        
          <Link to="/Programmation">
          <div className="ConcertHomePage " width={300} height={400} >
            <ConcertHomePage />
          </div>
          </Link>
         

          <Billet />



          <Link to="/Plan">
            <Suspense fallback={<div className="loading-map">Chargement de la carte...</div>}>
              <div className="d-none d-lg-block GmapMini  col-8 offset-2  ">
                <GoogleMap />
              </div>

              <div className="d-block d-lg-none GmapMiniSmall  col-10 offset-1  ">
                <GoogleMap />              
              </div>
            </Suspense>            
          </Link>  

        </div>
        <div className="marginMap">
        <ScrollToTopButton/>
        </div>
        </>
              
                
      

      
      )

}

export default Home;