import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {  BrowserRouter as Router, Route} from "react-router-dom"
import Hero from './components/Hero';
// import Slider from './components/Slider';
import data from "./data/data.json"
import Heading from './components/Heading.js'
// import StarProduct from './components/StarProduct'
import HotAccessoriesMenu from './components/HotAccessoriesMenu'
import HotAccessories from './components/HotAccessories'
// import ProductReviews from './components/ProductReviews'
// import Videos from './components/Videos';
// import Banner from './Banner';
import Footer from './components/Footer';
import About from './components/About';
import Whatsapp from './components/Whatsapp';
import Contact from './components/Contact';
import Card  from './components/Card';

function App() {

  return (
  <Router>
       <PreNavbar/>
       <Navbar />
       
       {/* <Slider start={data.banner.start} /> */}
       <Hero />
       <Heading text="WebFork Features" />
       <Card />
       {/* <Offers offer={data.offer} /> */}
       {/* <Heading text="STAR PRODUCTS" />
       <StarProduct starProduct={data.starProduct} /> */}
       <Heading text="WebFork Categories" />
       <HotAccessoriesMenu/>

       <Route path={"/"} component= {<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
      {/* <Route exact path="/music">
        <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />
      </Route> */}

      <Route exact path="/smartDevice">
       <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />
       </Route>

      <Route exact path="/home">
        <HotAccessories home={data.hotAccessories.home} 
        homeCover={data.hotAccessoriesCover.home} />
      </Route>

      <Route exact path="/lifeStyle">
        <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} 
        lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />
      </Route>

      <Route exact path="/mobileAccessories">
        <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} 
        mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />
      </Route>

  <Heading text="About Us" />
  <About />

  <Heading text="Contact Us" />

  <Contact />

  {/* <ProductReviews productReviews={data.productReviews} /> */}

  {/* <Heading text="VIDEOS" /> */}

  {/* <Videos videos={data.videos} /> */}

  {/* <Heading text="IN THE PRESS" /> */}

  {/* <Banner banner={data.banner} /> */}

  <Whatsapp />

  <Footer footer={data.footer} />

   </Router>

  );
}

export default App;
