import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import News from './Pages/News';



function App() {
  return (
    <div >
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
          <Route exact path="/" element={<News />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
