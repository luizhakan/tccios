// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contato from "./pages/Contato"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
          <Routes>
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Routes>
            <Route path="/sobrenos" element={<Sobre />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;