import React from "react"
import { useState, useEffect} from "react";
import {AdvancedMarker, InfoWindow, useAdvancedMarkerRef} from '@vis.gl/react-google-maps';
import "../style/Markers.css";
import { Link } from "react-router-dom";
import scene from "../assets/scene.png";
import Button from 'react-bootstrap/Button';


                                                        /* Affichage des Markers*/

/*Récupération des coordonées des bars du fichier JSON */


const  MarkersScene = () => {
/* La constante bars est vide à l'initiale */

/*idem pour scenes */
const [scenes, setScenes] = useState([])
  useEffect( ()=>{
    const fetchItemScenes = async () => {
    fetch("https://concertslives.store/api/scenes") 
    .then((response)=>response.json())
    .then(data=>setScenes(data.member))
    .catch(error => console.log(error))
    };
    
    fetchItemScenes();          
  }, []);



  type Poi ={ id: string, name: string, position: google.maps.LatLngLiteral,fullIconUrl: string, width:string, height: string, info: string  }

  /*Utilisation de la méthode map() pour transformer les données, puis les affilier à un composant google map AdvancedMarker */
/*Markers avec infoWindow */
const MarkerWithInfoWindow = (props: {pois: Poi[]}) => {
  // `markerRef`  est nécessaire pour établir la connection entre le marker et le infoWindows
  const [markerRef] = useAdvancedMarkerRef();
//par défaut infowindow fermée
  const [infowindowOpen, setInfowindowOpen] = useState(false);

  
  return (
    <>
    {props.pois.map( (Val: Poi) => (
      <AdvancedMarker
        key={Val.id}
        ref={markerRef}
        position={Val.position}
        onClick={() => setInfowindowOpen(true)}>
        <img src={Val.fullIconUrl} width={Val.width} height={Val.height} alt={Val.name}/>

        {infowindowOpen && (
        
        <InfoWindow position={Val.position} onCloseClick={() => setInfowindowOpen(false)} >
          
          <Link to= "/LiveEvents/Programmation">          
            <p>{Val.name}</p>
            <Button className="checkRGPDLink" variant="link">Voir le programme</Button>
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
            <img src={scene} width="25em" height= "25em" alt="Scène"/>
        </div>  
        
      </div> 
    </>
  );
};

export default MarkersScene;



    