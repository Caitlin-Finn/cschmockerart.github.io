import logo from './logo.svg';
import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./routes/About";
import Art from "./routes/Art";
import Home from "./routes/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/art" element={<Art />} />
    </Routes>
  </>
  );
}

export default App;
