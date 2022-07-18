import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {  BrowserRouter as Router, Route} from "react-router-dom"
import Hero from './components/Hero';
import data from "./data/data.json"
import Heading from './components/Heading.js'
import Footer from './components/Footer';
import About from './components/About';
import Whatsapp from './components/Whatsapp';
import Contact from './components/Contact';
import Card  from './components/Card';
import Blogs from './components/Blogs';
import Product from './components/Product';

function App() {

  return (
  <Router>


       <PreNavbar/>
       <Navbar />

       <Hero />
       
       <Heading text="WebFork Features" />
       <Card />

       <Heading text="WebFork Categories" />
       <Product />

      <Route path="/Blogs" component={<Blogs/>}/>

  <Heading text="About Us" />
  <About />

  <Heading text="Contact Us" />

  <Contact />

  <Whatsapp />

  <Footer footer={data.footer} />
  </Router>
  );
}

export default App;
