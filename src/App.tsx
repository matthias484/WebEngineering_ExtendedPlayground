import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './frontend/Home.js';
import Bears from './frontend/Bears.js';
import About from './frontend/About.js';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import './App.css';  // Additional styling if necessary

const App = () => {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bears" element={<Bears />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
