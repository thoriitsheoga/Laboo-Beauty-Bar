// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/home-page";
import AddNailPhoneComponent from "./Components/nailPhone";
import AboutSection from "./Components/about";
import BookingPolicies from "./Components/booking";
import Review from "./Components/review";
import BookingNow from './Components/booknow';
import BookWig from "./Components/wig-booking";
import NailShape from "./Components/pick-nail-shape";
import NailDecoration from "./Components/nail-deco";
import "./fonts/fonts.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <AddNailPhoneComponent />
            <AboutSection />
            <BookingPolicies />
            <Review />
          </>
        } />
        
        <Route path="/booknow" element={<BookingNow />} />
        <Route path ="/wig-booking" element={<BookWig/>}/>
        <Route path="/pick-nail-shape" element={<NailShape/>}/>
        <Route path="/nail-deco" element={<NailDecoration/>}/>
      </Routes>
    </Router>
  );
}

export default App;



