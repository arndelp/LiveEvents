import React, {useCallback, useState, useEffect} from 'react';
import scene from "../assets/scene.png";
import cocktail2 from "../assets/cocktail2.png";
import parking from "../assets/parking.png";
import entrer from "../assets/entrer.png";
import boutique from "../assets/boutique.png";
import toilettes from "../assets/toilettes.png";
import camping from "../assets/camping.png";
import curseur from '../assets/parametres-curseurs.png';
import {
  AdvancedMarker,
  AdvancedMarkerProps,
  APIProvider,
  InfoWindow,
  Map,  
  useAdvancedMarkerRef,
  AdvancedMarkerAnchorPoint
} from '@vis.gl/react-google-maps';
import apiKey from "../key/apiKey.js";
import mapId from "../key/mapId.js";

const GoogleMap = () => {
  
  //Récupération des données par l'API en utilisant une promesse
  useEffect( ()=>{
    const apiCallMarkers = async () => {
       const apiCallPromise = await fetch("https://concertslives.store/api/markers")
       const apiCallObj = await apiCallPromise.json();
       setMarkerData(apiCallObj)     
     };
     apiCallMarkers();   
}, []);
   
const [markerData, setMarkerData] = useState([]);  
const [selectedId, setSelectedId] = useState<string | null>(null);
const [selectedDetails, setSelectedDetails] = useState<string | null>(null);
const [selectedName, setSelectedName] = useState<string | null>(null); 
const [selectedMarker, setSelectedMarker] =
  useState<google.maps.marker.AdvancedMarkerElement | null>(null);
const [infoWindowShown, setInfoWindowShown] = useState(false);
const [showLinks, setShowLinks] = useState(false); 
 

//Lors du click sur le marker, sélection de l'id, des détails et du nom du marker nécessaire à l'affichage de l'infowindow
const onMarkerClick = useCallback(
  (name: string | null, details: string | null, id: string | null,   marker ?: google.maps.marker.AdvancedMarkerElement) => {
    setSelectedId(id);
    setSelectedDetails(details);
    setSelectedName(name);
    
    if (marker) {
      setSelectedMarker(marker);       
    }
    if (id !== selectedId) {        
      setInfoWindowShown(true);
    } else {
      setInfoWindowShown(isShown => !isShown);
    }
  },
  [selectedId]   
);
//Lors d'un click sur la map (autre que sur un marker), vidage des variables , fermeture de l'infowindow
const onMapClick = useCallback(() => {
  setSelectedId(null);
  setSelectedMarker(null);
  setInfoWindowShown(false);
}, []);
//Fermeture de l'infowindow lorsqu'on click sur la croix de fermeture
const handleInfowindowCloseClick = useCallback(
  () => setInfoWindowShown(false),
  []
);
//Variables et fonctions pour les checkbox du menu
const [sceneChecked, setSceneChecked] =React.useState(true);
const handleChangeScene = () => {setSceneChecked(!sceneChecked)};

const [barChecked, setBarChecked] =React.useState(true);
const handleChangeBar = () => {setBarChecked(!barChecked)};

const [parkChecked, setParkChecked] =React.useState(true);
const handleChangePark = () => {setParkChecked(!parkChecked)};

const [exitChecked, setExitChecked] =React.useState(true);
const handleChangeExit = () => {setExitChecked(!exitChecked)};

const [shopChecked, setShopChecked] =React.useState(true);
const handleChangeShop = () => {setShopChecked(!shopChecked)};

const [wcChecked, setWcChecked] =React.useState(true);
const handleChangeWc = () => {setWcChecked(!wcChecked)};

const [campChecked, setCampChecked] =React.useState(true);
const handleChangeCamp = () => {setCampChecked(!campChecked)};

const handleShowLinks = () => {
  setShowLinks(!showLinks);    
}


// Définition du marker
const AdvancedMarkerWithRef = (
  props: AdvancedMarkerProps & {
    onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void;
  }
) => {
const {children, onMarkerClick, ...advancedMarkerProps} = props;
const [markerRef, marker] = useAdvancedMarkerRef();

return (
  <AdvancedMarker
    onClick={() => {
      if (marker) {
        onMarkerClick(marker);
      }
    }}
    ref={markerRef}
    {...advancedMarkerProps}>
    {children}
  </AdvancedMarker>
  );
};



  return (   
    <APIProvider apiKey= "AIzaSyDyFJl07pOphogij6mYHfO311l_LpvJ85g" libraries={['marker']}>
      <>
      <div className='backgroundMap' style={{overflow: "hidden"}}>        
                                 
        <div className="btn-group BurgerSituationMap" data-toggle="buttons-checkbox">                                  
          <button type="button" className="BurgerProg btn btn-default " onClick={handleShowLinks}>                        
            <img src={curseur} alt='burger' ></img>                        
          </button>                    
        </div>      
        
        {/* Affichage des checkbox du menu  */}
            
      <div className='Gmap'>                                   
        <div className={`  ${showLinks ? "d-block" : "d-none"} `}>  
          <div className='d-none d-lg-block'>
            <div className='ico'> 
              <input type="checkbox" checked={sceneChecked} onChange={handleChangeScene}/>
              <img src={scene} width="35em" height= "35em" alt="Scène"/>
              <input type="checkbox" checked={barChecked} onChange={handleChangeBar}/>
              <img src={cocktail2} width="35em" height= "35em" alt="bar"/>
              <input type="checkbox" checked={parkChecked} onChange={handleChangePark}/>
              <img src={parking} width="35em" height= "35em" alt="parking"/>
              <input type="checkbox" checked={exitChecked} onChange={handleChangeExit}/>
              <img src={entrer} width="35em" height= "35em" alt="parking"/>
              <input type="checkbox" checked={shopChecked} onChange={handleChangeShop}/>
              <img src={boutique} width="35em" height= "35em" alt="shop"/>
              <input type="checkbox" checked={wcChecked} onChange={handleChangeWc}/>
              <img src={toilettes} width="35em" height= "35em" alt="wc"/>
              <input type="checkbox" checked={campChecked} onChange={handleChangeCamp}/>
              <img src={camping} width="35em" height= "35em" alt="camping"/>
            </div>
          </div> 
          <div className='d-block d-lg-none'>
            <div > 
              <div className='icoMobile'>
                <input type="checkbox" checked={sceneChecked} onChange={handleChangeScene}/>
                <img src={scene} width="35em" height= "35em" alt="Scène"/>
                <input type="checkbox" checked={barChecked} onChange={handleChangeBar}/>
                <img src={cocktail2} width="35em" height= "35em" alt="bar"/>
                </div>
                <div className='icoMobile'>
                <input type="checkbox" checked={parkChecked} onChange={handleChangePark}/>
                <img src={parking} width="35em" height= "35em" alt="parking"/>   
                <input type="checkbox" checked={exitChecked} onChange={handleChangeExit}/>
                <img src={entrer} width="35em" height= "35em" alt="parking"/>
                </div>
                <div className='icoMobile'>
                <input type="checkbox" checked={shopChecked} onChange={handleChangeShop}/>
                <img src={boutique} width="35em" height= "35em" alt="shop"/>
                <input type="checkbox" checked={wcChecked} onChange={handleChangeWc}/>
                <img src={toilettes} width="35em" height= "35em" alt="wc"/>
                <input type="checkbox" checked={campChecked} onChange={handleChangeCamp}/>
                <img src={camping} width="35em" height= "35em" alt="camping"/>
              </div>
            </div>
          </div>
        </div>   
       
        {/* Affichage de la Map */}
      <Map
        mapId="d17a67bf932afd78"
        maxZoom={20}
        minZoom={10}
        defaultZoom={15.477}
        defaultCenter={{lat: 48.64627130950389,    lng: 1.8125529133067797}}
        gestureHandling={'auto'}
        onClick={onMapClick}
        clickableIcons={false}
        disableDefaultUI>

            
        {markerData.map(({id, latitude, longitude, type, zIndex, details, name}) => {          
          // Affichage des icones avec condition de "type" et de la checkbox activée  
          if (type === "scene" && sceneChecked ) {           
            return (
              
              <React.Fragment >                          
                <AdvancedMarkerWithRef                  
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={scene} width={45} height={45} alt="scene"/>                                     
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }

          if (type === 'bar' && barChecked) {
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={cocktail2} width={40} height={40} alt="bar"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }

          if (type === 'parking' && parkChecked) {
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={parking} width={30} height={30} alt="parking"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }

          if (type === 'door' && exitChecked) {
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={entrer} width={30} height={30} alt="exit"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }

          if (type === 'shop' && shopChecked) {
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={boutique} width={30} height={30} alt="shop"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }

          if (type === 'wc' && wcChecked) {
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={toilettes} width={30} height={30} alt="wc"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }

          if (type === 'camping' && campChecked) {
            return (                  
              <React.Fragment >                 
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(name,details,id, marker)}                        
                  position={{lat: parseFloat( latitude ),lng: parseFloat( longitude )}}
                  anchorPoint={AdvancedMarkerAnchorPoint['CENTER']}
                  zIndex={zIndex}>
                  <img src={camping} width={30} height={30} alt="wc"/>                  
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }         
        })}
          
         {/* condition d'affichage et contenu de l'infowindow  */}

        {infoWindowShown && selectedMarker && (
          <InfoWindow
            anchor={selectedMarker}
            pixelOffset={[0, 20]}
            onCloseClick={handleInfowindowCloseClick}>
            <h4>{selectedName}</h4>
            <p>{selectedDetails}</p>            
          </InfoWindow>
        )}
        
      </Map>
    </div>        
  </div>
  </>      
  </APIProvider>    
  );  
};
export default GoogleMap;

