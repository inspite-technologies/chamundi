import { BrowserRouter as Router } from 'react-router-dom';
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
                    <div id="home">
                        <Home />
                    </div>
                    <div id="studios">
                        <Studios />
                    </div>
                    <div id="services">
                        <Services />
                    </div>
                    <div id="booking">
                        <Booking />
                    </div>
                    <div id="about">
                        <About />
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
