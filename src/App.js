//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Import Components
import Nav from "./components/Nav";
//Router
import {Routes, Route} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>

      <Routes>

        <Route path="/" element={<AboutUs/>} />

        <Route path="/work" exact element={<OurWork/>} />

        <Route path="/work/:id" element={<MovieDetail/>} />

        <Route path="/contact" element={<ContactUs/>} />

      </Routes>

    </div>
  );
}

export default App;
