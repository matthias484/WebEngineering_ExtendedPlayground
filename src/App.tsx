import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bears from './pages/Bears';
import About from './pages/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
