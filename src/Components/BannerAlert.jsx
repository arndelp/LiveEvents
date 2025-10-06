import { useState, useEffect } from "react";
import React from "react";
import { Carousel } from "flowbite-react";


export const apiURL = process.env.REACT_APP_API_URL;

export default function BannerAlert() {

   /*alerts est initialement vide*/
  const [alerts, setAlerts] = useState([])

  const [visible, setVisible] = useState(false)





     /*envoi une requête et récupération des données dans la base de données puis les stockent dans alerts avec setAlertss*/
  useEffect(()=>{
     // création d'un controller d'annulation
      const controller = new AbortController();
      
      const apiCallAlerts = async () => {
        try {
          const apiCallPromise = await fetch(`${apiURL}/api/alerts`, {
                signal: controller.signal,
              });
          const apiCallObj = await  apiCallPromise.json();
        setAlerts(apiCallObj)
        }catch (error) {
        if (error.name === 'AbortError') {
          console.error("Requête des datas d'Alert annulée");
        } else {
          console.error("Erreur lors de la requête Alert:", error);
        }
      }
    };         
    apiCallAlerts();
    setVisible(true)
  }, []);





/* Création du caroussel et map des données*/

  const listAlert = alerts.map(Val =>
    
   
    <div className="h-20 sm:h-20 xl:h-20 2xl:h-20" >
      
      <Carousel   slide={false}>
        
        <div className="flex h-full items-top justify-center bg-red-600 dark:bg-gray-700 dark:text-white text-yellow-200 text-2xl animate-pulse">
          {Val.message1}
        </div>
        
        <div className="flex h-full items-top justify-center bg-amber-400 dark:bg-gray-700 dark:text-white text-red-600 text-2xl animate-pulse">
          {Val.message2}
        </div>  
        
      </Carousel>

      </div>
   
    
         
  )
  if (visible) {
  return (
      <>
   
      {listAlert}
      
      </>
  
  )
}
  
}

