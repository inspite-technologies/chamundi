import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Studios', path: '/studios' },
        { name: 'Services & Pricing', path: '/services' },
        { name: 'Booking', path: '/booking' },
        { name: 'About', path: '/about' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled glass' : ''} ${!scrolled && location.pathname !== '/' ? 'white-nav' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <img src="/images/logo_chamundi.jpeg" alt="Chamundi Yoga" className="logo-img" />
                    <span className="logo-text">
                        <span className="logo-main">Yoga Retreat</span>
                        <span className="logo-sub">Chamundi Hill Palace</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/booking" className="btn btn-primary">Book Now</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/booking" className="btn btn-primary" onClick={() => setIsOpen(false)}>Book Now</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
