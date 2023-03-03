import React from "react";
import Hello from "./Component/Hello";
import Website from "./Component/Website";
import Home from "./Component/Home";
import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs";
import Contact from "./Component/Contact";



import {BrowserRouter as Router,Route,Link,Switch, Routes} from 'react-router-dom';


function App(){
  return(
    <div className="App">
     {/* <h2>Hello World</h2>
     <Hello></Hello> */}

    {/* <Router>
      <Routes>
     <Website></Website>
      <Route path="/home" element={<Website/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>

      </Routes>
    </Router> */}

    <Router>

      <Routes>
       
      <Route exact path="/" element={ <Home/> } />
        <Route exact path="/home" element={ <Home/> } />
        <Route exact path="/about" element={ <About/> } />
        <Route exact path="/contact" element={ <Contact/> } />
        </Routes>
       
      </Router>

       
    </div>
    
  );
 
}
export default App;