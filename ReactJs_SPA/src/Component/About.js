import React from 'react'
import './website_style.css';
import { Link } from "react-router-dom";

function About() {
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

        <div id="about">
        <p>In this tutorial we will show you how to create One Page Website Template Using HTML, CSS And jQuery.Now you can build simple and beautiful website quickly.</p>
        <p>ClassMates.com is a complete destination to learn Web Development with Best, Fast and Easy Methods for those who is a novice and wants to be the Xpert in Web Development.</p>
        <p>We'll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes. </p>
        <p>If you need to review JavaScript, we recommend reading this guide. Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements. You can use the Babel REPL to check what ES6 code compiles to. </p>
       </div>

       </div>
    )
}

export default About