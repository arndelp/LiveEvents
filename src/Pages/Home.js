import ConcertHomePage from "../Components/ConcertHomePage.js"
import GoogleMap from "../Components/GoogleMap.tsx"
import BannerAlert from "../Components/BannerAlert.js"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import {  HiShoppingCart } from "react-icons/hi";
import "../style/Home.css";
import "../style/Map.css";





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
       
      <div className="row background">

          <BannerAlert /> 

          <h1 className="title ">NATION SOUNDS</h1>

        <Link to="/LiveEvents/Programmation">
          <div className="ConcertHomePage">
            <ConcertHomePage />
          </div>
        </Link>

          <Billet />

          <Link to="/LiveEvents/Plan">
            <div className="offset-1 col-10 mapMini">
              <GoogleMap />
            </div>
          </Link>

        </div></>
              
                
      

      
      )

}

export default Home;