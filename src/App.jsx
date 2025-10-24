import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Foot from "./Components/Foot";
import ScrollToTop from "./Components/ScrollToTop";
import { AuthProvider } from "./Context/AuthContext";
import { Suspense, lazy } from "react";

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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>

              <Route path="/LiveEvents/" element={ 
                <Home />         }>           
              </Route>  

              <Route path="/LiveEvents/Programmation"  element={<Programmation /> }>
              </Route>  

              <Route path="/LiveEvents/Programmation/ProgrammeDetails" element={<ProgrammeDetails /> } >
              </Route>         
                        
              <Route path="/LiveEvents/Billetterie" element={
                <Billetterie />  }>
              </Route>  

              <Route path="/LiveEvents/Informations" element={
                <Informations />  }>
              </Route>
                    
              <Route path="/LiveEvents/Plan" element={ 
                <Plan />         }>                     
              </Route>    

              <Route path="/LiveEvents/Contact" element={            
                <Contact />     }>
              </Route>

              <Route path="/LiveEvents/Submitted" element={            
                <Submitted />     }>
              </Route>

              <Route path="/LiveEvents/Confidential" element={
                <Confidential /> }>
              </Route>   

              <Route path="/LiveEvents/Register" element={
                <Register /> }>
              </Route>  

              <Route path="/LiveEvents/Login" element={
                <Login /> }>
              </Route>  

              <Route path="/LiveEvents/Registered" element={            
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
