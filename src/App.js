import "./App.css";
import { HashRouter, Routes, Route} from "react-router-dom";
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
  <HashRouter>
    
      <Nav />     
        
        <Routes>

          <Route path="/LiveEvents/" element={ 
            <Home />         }>           
          </Route>  

          <Route path="/LiveEvents/Programmation"  element={<Programme /> }>
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
          
          
          
        </Routes>
       
    
          
    <Foot />
      
    

</HashRouter>
   
   
    

  );
}

export default App;
