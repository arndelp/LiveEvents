import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Foot from "./Components/Foot";
import ScrollToTop from "./Components/ScrollToTop";
import { AuthProvider } from "./Context/AuthContext";
import {lazy } from "react";

// Lazy loading des pages
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
 
  return (   
    <BrowserRouter>

      <AuthProvider>      

        <ScrollToTop /> 
        <Nav />    
          
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
          
              
        <Foot />           

      </AuthProvider> 

    </BrowserRouter>   

  );
}

export default App;
