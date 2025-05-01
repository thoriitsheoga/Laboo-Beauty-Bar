import NavBar from "./Components/home-page";
import AddNailPhoneComponent from "./Components/nailPhone";
import AboutSection from "./Components/about";
import BookingPolicies from "./Components/booking";
import Review from "./Components/review";
import "./fonts/fonts.css";

function App() {
  return (
    <>
      <NavBar />
      <div id="home">
        <AddNailPhoneComponent />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="booking">
        <BookingPolicies />
      </div>
      <div id="review">
        <Review />
      </div>
    </>
  );
}

export default App;

