import React from "react";
import './website_style.css';

function scrollto(div)
{
('html,body').animate(
 {
  scrollTop: ("#"+div).offset().top
 },'slow');
}
function AboutUs() {
    return (
       
       
           
    
        

   

<div id="AboutUs">
 <p>In this tutorial we will show you how to create One Page Website Template Using HTML, CSS And jQuery.Now you can build simple and beautiful website quickly.</p>
 <p>ClassMates.com is a complete destination to learn Web Development with Best, Fast and Easy Methods for those who is a novice and wants to be the Xpert in Web Development.</p>
 <p>We'll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes. </p>
 <p>If you need to review JavaScript, we recommend reading this guide. Note that we’re also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements. You can use the Babel REPL to check what ES6 code compiles to. </p>
</div>







    );
    
  }
export default AboutUs;