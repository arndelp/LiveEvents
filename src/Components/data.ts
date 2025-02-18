import React from "react"
import { useState, useEffect } from "react";

import "../style/Markers.css";


                                                        /* Affichage des Markers*/

/*Récupération des coordonées des bars du fichier JSON */
type MarkerData = Array<{
  id: string;
  position: google.maps.LatLngLiteral;
  type: 'BAR' | 'SCENE';
  zIndex: number;
}>;

const  GetData = () => {

  
  const [data, setData] = useState<MarkerData[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/markers");
        const jsonData = await response.json();
       
        setData(jsonData);
      } catch (error) {
        console.log(error, "error"); // logs the error message to the console
      }
    };
    fetchData();
  }, []);    
console.log(data);
return data
}; 


export default GetData;



    