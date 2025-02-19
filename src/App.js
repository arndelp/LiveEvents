import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Components/Nav";
import Foot from "./Components/Foot";
import Home from "./Pages/Home";
import Billetterie from "./Pages/Billetterie";
import Programme from "./Components/Programme"
import Contact from "./Pages/Contact";
import Informations from "./Pages/Informations";
import Plan from "./Pages/Plan";
import ProgrammeDetails from "./Components/ProgrammeDetails";
import Submitted from "./Pages/Submitted";
import Confidential from "./Pages/Confidential";








function App() {
  return (    
  <BrowserRouter>
    
      <Nav />     
        
        <Routes>

          <Route path="/LiveEvents" element={ 
            <Home />         }>           
          </Route>  

          <Route path="/Programmation"  element={<Programme /> }>
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
          
          
          
        </Routes>
       
    
          
    <Foot />
      
    

</BrowserRouter>
   
   
    

  );
}

export default App;
