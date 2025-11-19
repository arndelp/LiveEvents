import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Foot from "./Components/Foot";
import ScrollToTop from "./Components/ScrollToTop";
import { AuthProvider } from "./Context/AuthContext";
import {Suspense,lazy } from "react";
import { useEffect } from "react";


// Lazy loading des pages - chargement des composants en temps réel (lorsqu'ils sont utilisés)
const Home = lazy(() => import("./Pages/Home"));
const Billetterie = lazy(() => import("./Pages/Billetterie"));
const Programmation = lazy(() => import("./Pages/Programmation"));
const Contact = lazy(() => import("./Pages/Contact"));
const Informations = lazy(() => import("./Pages/Informations"));
const Plan = lazy(() => import("./Pages/Plan"));
const ProgrammeDetails = lazy(() => import("./Components/ProgrammeDetails"));
const Submitted = lazy(() => import("./Pages/Submitted"));
const Confidential = lazy(() => import("./Pages/Confidential"));
const Register = lazy(() => import("./Pages/Register"));
const Login = lazy(() => import("./Pages/Login"));
const Registered = lazy(() => import("./Pages/Registered"));





function App() {
// Animation de préchargement (Préchargement du hero et animation du logo)
  useEffect(() => {
    const preloadHero = document.getElementById("preload-hero");
    const logo = document.querySelector(".logo-preload");

    const startFade = () => {
      //Ajout de la classe CSS fade-out au logo (transparence->opacity=0)
      if (logo) logo.classList.add("fade-out");
      //Suppression de l'animation de préload après 800ms)
      setTimeout(() => {
        preloadHero?.remove();
      }, 800);
    };

// Si la page est déjà chargée, démarrer l'animation immédiatement (nécessaire pour safari)
    if (document.readyState === "complete") {
    // page déjà chargée
    requestAnimationFrame(startFade);
  } else {
    window.addEventListener("load", startFade);
    return () => window.removeEventListener("load", startFade);
  }
  }, []);


  return (   
    <BrowserRouter>

      <AuthProvider>      

        <ScrollToTop /> 
        <Nav />    
          <Suspense fallback={null}>
            <Routes>

             

              <Route path="/" element={ 
                <Home />         }>           
              </Route>  

              <Route path="/Programmation"  element={<Programmation /> }>
              </Route>  

              <Route path="/Programmation/ProgrammeDetails" element={<ProgrammeDetails /> } >
              </Route>         
                        
              <Route path="/Billetterie" element={
                <Billetterie />  }>
              </Route>  

              <Route path="/Informations" element={
                <Informations />  }>
              </Route>
                    
              <Route path="/Plan" element={ 
                <Plan />         }>                     
              </Route>    

              <Route path="/Contact" element={            
                <Contact />     }>
              </Route>

              <Route path="/Submitted" element={            
                <Submitted />     }>
              </Route>

              <Route path="/Confidential" element={
                <Confidential /> }>
              </Route>   

              <Route path="/Register" element={
                <Register /> }>
              </Route>  

              <Route path="/Login" element={
                <Login /> }>
              </Route>  

              <Route path="/Registered" element={            
                <Registered />     }>
              </Route>

                      
            </Routes>    
          </Suspense>
              
        <Foot />           

      </AuthProvider> 

    </BrowserRouter>   

  );
}

export default App;
