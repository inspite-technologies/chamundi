import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Studios from './pages/Studios';
import Services from './pages/Services';
import Booking from './pages/Booking';

import About from './pages/About';


function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/studios" element={<Studios />} />
                        <Route path="/services" element={<Services />} />

                        <Route path="/booking" element={<Booking />} />
                        <Route path="/about" element={<About />} />
                    </Routes>

                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
