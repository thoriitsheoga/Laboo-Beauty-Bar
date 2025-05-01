import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/home-page";
import AddNailPhoneComponent from "./Components/nailPhone";
import AboutSection from "./Components/about";
import BookingPolicies from "./Components/booking";
import Review from "./Components/review";
import "./fonts/fonts.css";

function HomePage() {
  return (
    <>
      <AddNailPhoneComponent />
      <AboutSection />
      <Review />
    </>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      
        <Route path="/" element={<HomePage />} />

      
        <Route path="/Bookings/booking" element={<BookingPolicies />} />
      </Routes>
    </Router>
  );
}

export default App;


