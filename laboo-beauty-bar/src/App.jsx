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
      <AddNailPhoneComponent />
      <AboutSection />
      <BookingPolicies/>
      <Review/>
    </>
  );
}

export default App;
