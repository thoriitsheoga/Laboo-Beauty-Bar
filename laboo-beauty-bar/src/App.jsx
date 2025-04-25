import NavBar from "./Components/home-page";
import AddNailPhoneComponent from "./Components/nailPhone";
import AboutSection from "./Components/about";
import BookingPolicies from "./Components/booking";
import "./fonts/fonts.css";
function App() {
  return (
    <>
      <NavBar />
      <AddNailPhoneComponent />
      <AboutSection />
      <BookingPolicies/>
    </>
  );
}

export default App;
