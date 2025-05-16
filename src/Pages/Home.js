import ConcertHomePage from "../Components/ConcertHomePage.js"
import GoogleMap from "../Components/GoogleMap.tsx"
import BannerAlert from "../Components/BannerAlert.js"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import {  HiShoppingCart } from "react-icons/hi";
import ScrollToTopButton from "../Components/ScrollToTopButton.js";






function Home() {

/*Fonction du bouton Billetterie */
    function Billet() {   
        return ( 
              
          <div class="row mb-20 mt-20" >
            <div className="boutonBilletHome ">
            <Link to="/LiveEvents/Billetterie">
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
          <h1 className="title pt-3">NATION SOUNDS</h1>
        </div>
        
          <Link to="/LiveEvents/Programmation">
          <div className="ConcertHomePage ">
            <ConcertHomePage />
          </div>
          </Link>
         

          <Billet />

          <Link to="/LiveEvents/Plan">
            
            <div className="d-none d-lg-block GmapMini  col-8 offset-2  ">
              <GoogleMap />
            </div>

            <div className="d-block d-lg-none GmapMiniSmall  col-10 offset-1  ">
              <GoogleMap />              
            </div>
           
            
          </Link>  

        </div>
        <div className="marginMap">
        <ScrollToTopButton/>
        </div>
        </>
              
                
      

      
      )

}

export default Home;