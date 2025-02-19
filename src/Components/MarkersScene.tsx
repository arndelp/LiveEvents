import React from "react"
import { useState, useEffect} from "react";
import {AdvancedMarker, InfoWindow, useAdvancedMarkerRef} from '@vis.gl/react-google-maps';
import "../style/Markers.css";
import { Link } from "react-router-dom";


                                                        /* Affichage des Markers*/

/*Récupération des coordonées des bars du fichier JSON */


const  MarkersScene = () => {
/* La constante bars est vide à l'initiale */

/*idem pour scenes */
const [scenes, setScenes] = useState([])
console.log(scenes);
  useEffect(()=>{
    fetch('http://127.0.0.1:8000/api/scenes')
    .then(response=>response.json())
    .then(data=>setScenes(data.member))
    .catch(error => console.log(error))     
  },[]);



  type Poi ={ id: string, name: string, position: google.maps.LatLngLiteral,fullIconUrl: string, width:string, height: string, info: string  }

  /*Utilisation de la méthode map() pour transformer les données, puis les affilier à un composant google map AdvancedMarker */
/*Markers avec infoWindow */
const MarkerWithInfoWindow = (props: {pois: Poi[]}) => {
  // `markerRef` and `marker` are needed to establish the connection between
  // the marker and infowindow (if you're using the Marker component, you
  // can use the `useMarkerRef` hook instead).
  const [markerRef] = useAdvancedMarkerRef();

  const [infowindowOpen, setInfowindowOpen] = useState(false);

  // clicking the marker will toggle the infowindow
  

  // if the maps api closes the infowindow, we have to synchronize our state
  

  return (
    <>
    {props.pois.map( (Val: Poi) => (
      <AdvancedMarker
        key={Val.id}
        ref={markerRef}
        position={Val.position}
        onClick={() => setInfowindowOpen(true)}>
        <img src={Val.fullIconUrl} width={Val.width} height={Val.height} alt="marker"/>

        {infowindowOpen && (
        
        <InfoWindow position={Val.position} onCloseClick={() => setInfowindowOpen(false)} >
          
          <Link to= "/LiveEvents/Programmation">          
          <a href="/LiveEvents/Programmation">{Val.name}</a>
          </Link>
        </InfoWindow>
        )}

        
        </AdvancedMarker>
        
      
    ))}

  
     

    </>
  );
};






const [showResultsScenes, setShowResultsScenes] = React.useState(true)
const handleChangeScenes  = () => setShowResultsScenes(!showResultsScenes)





 /*Scènes */
 const ResultsScenes=() => (
  <MarkerWithInfoWindow   
  pois={scenes}   
  /> 
 )


  return (
    <>    
{/*Affichage conditionnel ds icones avec une checkbox une checkbox (Appel du composant des icones + fonction d'affichage/cache des icones handleChange...*/} 
    <div className="legend">
     
      <div className="ico">
          <input type="checkbox" checked={showResultsScenes} onChange={handleChangeScenes} />
          { showResultsScenes ? <ResultsScenes /> : null }
          <img src="../assets/scene.png" width="25em" height= "25em" alt="Scène"/>
      </div>  
      
    </div> 
    </>
  );
};

export default MarkersScene;



    