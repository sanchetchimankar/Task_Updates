import React from "react";
import { Link } from "react-router-dom";
import './website_style.css';


function Website() {
    return (
       
       
           
      <div>
      <div id="header">
      <li id="site_name">ClassMates.com</li>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/AboutUs">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
     </div>


       <div id="home">
 Demo Of One Page Website Template Using HTML, CSS And jQuery<p>ClassMates.com</p>
 <p>We will build a small game during this tutorial. You might be tempted to skip it because you’re not building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React. </p>
</div>



       </div>


    );
    
  }
export default Website;