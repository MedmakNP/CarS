import Header from "./components/Header/Header.jsx"
import Intro from "./components/Intro/Intro.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Chose from "./components/Chose/Chose.jsx";
import Stock from "./components/Stock/Stock.jsx";
import BrandsSwiper from "./components/BrandsSwiper/BrandsSwiper.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import ThemeProvider from "./provider/ThemeProvider.jsx";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Intro />
        <AboutUs />
        <Chose />
        <Stock />
        <BrandsSwiper />
        <Contacts />
      </ThemeProvider>
    </div>
  );
}

export default App;
