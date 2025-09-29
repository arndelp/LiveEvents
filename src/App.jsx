import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Foot from "./Components/Foot";
import Home from "./Pages/Home";
import Billetterie from "./Pages/Billetterie";
import Programmation from "./Pages/Programmation";
import Contact from "./Pages/Contact";
import Informations from "./Pages/Informations";
import Plan from "./Pages/Plan";
import ProgrammeDetails from "./Components/ProgrammeDetails";
import Submitted from "./Pages/Submitted";
import Confidential from "./Pages/Confidential";
import ScrollToTop from "./Components/ScrollToTop";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { AuthProvider } from "./Context/AuthContext";
import Registered from "./Pages/Registered";
import VerifiedPage from "./Pages/VerifiedPage";
import VerificationFailedPage from "./Pages/VerificationFailedPage";  



function App() {
 
  return (   
    <BrowserRouter>

      <AuthProvider>      

        <ScrollToTop /> 
        <Nav />    

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

          <Route path="/LiveEvents/Verified" element={<VerifiedPage />} />
          <Route path="/LiveEvents/VerificationFailed" element={<VerificationFailedPage />} />
          
        </Routes>    
              
        <Foot />           

      </AuthProvider> 

    </BrowserRouter>   

  );
}

export default App;
