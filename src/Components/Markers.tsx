import React from "react"
import { useState, useEffect, useCallback } from "react";
import { AdvancedMarker, InfoWindow, useAdvancedMarkerRef } from "@vis.gl/react-google-maps";
import "../style/Markers.css";
import { Link } from "react-router-dom";
import boutique from "../assets/boutique.png";
import camping from "../assets/camping.png";
import cocktail2 from "../assets/cocktail2.png";
import entrer from "../assets/entrer.png";
import parking from "../assets/parking.png";
import toilettes from "../assets/toilettes.png";

/*Définition du type de Poi*/
type Poi ={ id: string, position: google.maps.LatLngLiteral,fullIconUrl: string, width:string, height: string, info: string  }
/* Affichage des Markers*/

/*Récupération des coordonées des bars du fichier JSON */

const Markers = () => {
  /* La constante bars est vide à l'initiale */
  
  /*Récupération des données par document */
  const [bars, setBars] = useState([])
  console.log(bars);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/bars')
      .then(response => response.json())
      .then(data => setBars(data.member))
      .catch(error => console.log(error))
  }, []);

  const [parks, setParks] = useState([])
  console.log(parks);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/parks')
      .then(response => response.json())
      .then(data => setParks(data.member))
      .catch(error => console.log(error))
  }, []);

  const [camps, setCamps] = useState([])
  console.log(camps);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/camps')
      .then(response => response.json())
      .then(data => setCamps(data.member))
      .catch(error => console.log(error))
  }, []);

  const [exits, setExits] = useState([])
  console.log(exits);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/doors')
      .then(response => response.json())
      .then(data => setExits(data.member))
      .catch(error => console.log(error))
  }, []);

  const [shops, setShops] = useState([])
  console.log(shops);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/shops')
      .then(response => response.json())
      .then(data => setShops(data.member))
      .catch(error => console.log(error))
  }, []);

  const [wc, setWc] = useState([])
  console.log(wc);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/wcs')
      .then(response => response.json())
      .then(data => setWc(data.member))
      .catch(error => console.log(error))
  }, []);

  // Deux types de markers (avec et sans infowindows)

  const ValMarkers = (props: { pois: Poi[] }) => {
    return (
      <>
        {props.pois.map((Val: Poi) => (
          <AdvancedMarker
            key={Val.id}
            position={Val.position}>
            <img src={Val.fullIconUrl} width={Val.width} height={Val.height} alt="marker" />
          </AdvancedMarker>
        ))}
      </>
    );
  };


  /*Utilisation de la méthode map() pour transformer les données, puis les affilier à un composant google map AdvancedMarker */
  /*Markers avec infoWindow */
  const MarkerWithInfoWindow = (props: { pois: Poi[] }) => {
    // `markerRef` and `marker` are needed to establish the connection between
    // the marker and infowindow (if you're using the Marker component, you
    // can use the `useMarkerRef` hook instead).
    const [markerRef] = useAdvancedMarkerRef();

    const [infoWindowShown, setInfoWindowShown] = useState(false);

    // clicking the marker will toggle the infowindow
    const handleMarkerClick = useCallback(
      () => setInfoWindowShown(isShown => !isShown),
      []
    );

    // if the maps api closes the infowindow, we have to synchronize our state
    const handleClose = useCallback(() => setInfoWindowShown(false), []);


    return (
      <>


        {props.pois.map((Val: Poi) => (
          <AdvancedMarker
            key={Val.id}
            ref={markerRef}
            position={Val.position}
            onClick={handleMarkerClick}>
            <img src={Val.fullIconUrl} width={Val.width} height={Val.height} alt="marker" />

            {infoWindowShown && (

              <InfoWindow position={Val.position} onClose={handleClose} >

                <Link to="/Informations">
                  <p>{Val.info}</p>
                </Link>
              </InfoWindow>
            )}
          </AdvancedMarker>
        ))}
      </>
    );
  };



  const [showResultsBars, setShowResultsBars] = React.useState(true)
  const handleChangeBars = () => setShowResultsBars(!showResultsBars)

  const [showResultsParks, setShowResultsParks] = React.useState(true)
  const handleChangeParks = () => setShowResultsParks(!showResultsParks)

  const [showResultsCamps, setShowResultsCamps] = React.useState(true)
  const handleChangeCamps = () => setShowResultsCamps(!showResultsCamps)

  const [showResultsExits, setShowResultsExits] = React.useState(true)
  const handleChangeExits = () => setShowResultsExits(!showResultsExits)

  const [showResultsShops, setShowResultsShops] = React.useState(true)
  const handleChangeShops = () => setShowResultsShops(!showResultsShops)

  const [showResultsWcs, setShowResultsWcs] = React.useState(true)
  const handleChangeWcs = () => setShowResultsWcs(!showResultsWcs)



  /*Scènes */
  const ResultsBars = () => (
    <MarkerWithInfoWindow
      pois={bars}
    />
  )

  // Parking
  const ResultsParks = () => (
    <MarkerWithInfoWindow
      pois={parks}
    />
  )

  // Camping
  const ResultsCamps = () => (
    <MarkerWithInfoWindow
      pois={camps}
    />
  )

  // Camping
  const ResultsShops = () => (
    <MarkerWithInfoWindow
      pois={shops}
    />
  )

  // Exit
  const ResultsExits = () => (
    <ValMarkers
      pois={exits}
    />
  )

  // Toilettes
  const ResultsWcs = () => (
    <ValMarkers
      pois={wc}
    />
  )


  return (
    <>
      {/*Affichage conditionnel ds icones avec une checkbox une checkbox (Appel du composant des icones + fonction d'affichage/cache des icones handleChange...*/}
      <div className="legend">

        <div className="ico">
          <input type="checkbox" checked={showResultsBars} onChange={handleChangeBars} />
          {showResultsBars ? <ResultsBars /> : null}
          <img src={cocktail2} width="25em" height="25em" alt="Bars" />
        </div>
      </div>

      <div className="legend">
        <div className="ico">
          <input type="checkbox" checked={showResultsParks} onChange={handleChangeParks} />
          {showResultsParks ? <ResultsParks /> : null}
          <img src={parking} width="25em" height="25em" alt="Parks" />
        </div>
      </div>

      <div className="legend">
        <div className="ico">
          <input type="checkbox" checked={showResultsCamps} onChange={handleChangeCamps} />
          {showResultsCamps ? <ResultsCamps /> : null}
          <img src={camping} width="25em" height="25em" alt="Camps" />
        </div>
      </div>

      <div className="legend">
        <div className="ico">
          <input type="checkbox" checked={showResultsExits} onChange={handleChangeExits} />
          {showResultsExits ? <ResultsExits /> : null}
          <img src={entrer} width="25em" height="25em" alt="Camps" />
        </div>
      </div>

      <div className="legend">
        <div className="ico">
          <input type="checkbox" checked={showResultsShops} onChange={handleChangeShops} />
          {showResultsShops ? <ResultsShops /> : null}
          <img src={boutique} width="25em" height="25em" alt="Shop" />
        </div>
      </div>

      <div className="legend">
        <div className="ico">
          <input type="checkbox" checked={showResultsWcs} onChange={handleChangeWcs} />
          {showResultsWcs ? <ResultsWcs /> : null}
          <img src={toilettes} width="25em" height="25em" alt="Shop" />
        </div>
      </div>
    </>
  );
};

export default Markers;



