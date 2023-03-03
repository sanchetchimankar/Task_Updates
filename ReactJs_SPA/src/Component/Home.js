import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import Image from "react-bootstrap";
function Home() {
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
      {/* --------------------------------------------------------------------------------------- */}
      {/* <nav className="navbar navbar-expand-sm bg-light" >

        <ul className="navbar-nav ml-auto" >
          <li className="nav-item">
            <li id="site_name"><h3>ClassMates.com</h3></li>
          </li>
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>

        </ul>
      </nav> */}



      {/* here is the multicolumn carousal */}
  
{/* 
<body>

  <br/>
  <div class="row">
    <div class="row">
      <div class="col-xs-12">

        <div id="imageCarousel" class="carousel slide" data-interval="2000" data-ride="carousel" data-pause="hover"
          data-wrap="true">

          <ol class="carousel-indicators">
            <li data-target="#imageCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#imageCarousel" data-slide-to="1"></li>
            <li data-target="#imageCarousel" data-slide-to="2"></li>
            <li data-target="#imageCarousel" data-slide-to="3"></li>

          </ol>

          <div class="carousel-inner">
            <div class="item active">
              <img src="Component/Image/Earth.jpg" class="img-responsive"/>
              <div class="carousel-caption">
                <h3>Earth</h3>
                <p>Earth Image Description</p>
              </div>
            </div>
            <div class="item">
              <img src="Image/Jellyfish.jpg" class="img-responsive" alt=""/>
              <div class="carousel-caption">
                <h3>Jellyfish</h3>
                <p>Jellyfish Image Description</p>
              </div>
            </div>
            <div class="item">
              <img src="Image/jungle.jpg" class="img-responsive" alt=""/>
              <div class="carousel-caption">
                <h3>jungle</h3>
                <p>jungle Image Description</p>
              </div>
            </div>


          </div>


        </div>

      </div>
    </div>

  </div>


  
</body>  */}





      <div id="home">
        Demo Of One Page Website Template Using HTML, CSS And jQuery<p>ClassMates.com</p>
        <p>We will build a small game during this tutorial. You might be tempted to skip it because you're not building games — but give it a chance. The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React. </p>
      </div>

      <div id="about">
        <h3 ><b>About us</b></h3>
        <p>In this tutorial we will show you how to create One Page Website Template Using HTML, CSS And jQuery.Now you can build simple and beautiful website quickly.</p>
        <p>ClassMates.com is a complete destination to learn Web Development with Best, Fast and Easy Methods for those who is a novice and wants to be the Xpert in Web Development.</p>
        <p>We'll assume that you have some familiarity with HTML and JavaScript, but you should be able to follow along even if you’re coming from a different programming language. We’ll also assume that you’re familiar with programming concepts like functions, objects, arrays, and to a lesser extent, classes. </p>
        <p>If you need to review JavaScript, we recommend reading this guide. Note that we're also using some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow functions, classes, let, and const statements. You can use the Babel REPL to check what ES6 code compiles to. </p>
      </div>


      <div id="contact">
        <h1>If you have any question or query you can contact us at <br />sanchetchimankar22@gmail.com <br /><br />or you can fill the form below</h1>
        <input type="text" placeholder="Name" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="SEND" />
      </div>
    </div>
  );
}

export default Home;