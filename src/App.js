import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import News from './Pages/News';
import Footer from './Footer/Footer';



function App() {
  return (
    <div >
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
