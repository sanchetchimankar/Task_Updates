import React from 'react'
import './website_style.css';
import { Link } from "react-router-dom";

function Contact() {
    return (
<div>
<nav className="navbar navbar-dark bg-secondary">



<header>
  <div id="header">
    <li id="site_name"><h3>ClassMates.com</h3></li>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li> <Link to="/contact">Contact</Link></li>
  </div>
</header>
</nav>

        <div id="contact">
        <h1>If you have any question or query you can contact us at <br/>sanchetchimankar22@gmail.com <br/><br/>or you can fill the form below</h1>
        <input type="text" placeholder="Name"/>
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="SEND"/>
        </div>

        </div>
    )
}

export default Contact