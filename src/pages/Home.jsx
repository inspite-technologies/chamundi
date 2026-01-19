import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const offerings = [
        {
            title: 'Equipped Studios',
            desc: 'Professional spaces with all yoga props and sound systems.',
            img: '/images/studio2.jpg'
        },
        {
            title: 'Peaceful Environment',
            desc: 'A serene sanctuary surrounded by nature for deep practice.',
            img: '/images/relaxingSpace.jpg'
        },
        {
            title: 'For All Levels',
            desc: 'Perfect for yoga instructors, students, and practitioners.',
            img: '/images/privateStudio.jpg'
        },
        {
            title: 'Flexible Booking',
            desc: 'Book by the hour, day, or weekend to suit your schedule.',
            img: '/images/welcomingGuests.jpg'
        },
    ];

    const spaces = [
        {
            id: 1,
            title: 'Studio 1 – Main Hall',
            desc: 'Spacious, bright studio for group sessions (20–30 people)',
            img: '/images/studio.jpg',
        },
        {
            id: 2,
            title: 'Studio 2 – Private Studio',
            desc: 'Cozy and calm, perfect for one-on-one or small classes (5–10 people)',
            img: '/images/yoga2.jpg',
        },
    ];

    const whyChooseUs = [
        'Prime location surrounded by nature',
        'Professional, peaceful atmosphere',
        'All equipment included',
        'Affordable rates',
        'Clean, well-maintained facilities',
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">

                <video autoPlay loop muted className="hero-video">
                    <source src="https://6mkg44hzboluchhi.public.blob.vercel-storage.com/002%20Aerial.mp4" type="video/mp4" />
                </video>

                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Your Perfect Yoga Space Awaits
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Premium studio space for instructors and practitioners
                    </motion.p>
                    <motion.div
                        className="hero-btns"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary">Book Space Now</button>
                        <button onClick={() => document.getElementById('studios').scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>View Studios</button>
                    </motion.div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="offer-section">
                <div className="container">
                    <motion.div
                        className="section-header text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>What We Offer</h2>
                        <div className="underline"></div>
                        <p>Experience the perfect balance of luxury and tranquility</p>
                    </motion.div>

                    <motion.div
                        className="offer-grid-enhanced"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {offerings.map((item, index) => (
                            <motion.div
                                key={index}
                                className="offer-card-enhanced"
                                variants={fadeInUp} // Uses the variant from parent
                            >
                                <div className="offer-img">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="offer-content">
                                    <div className="offer-header">
                                        <CheckCircle className="icon" />
                                        <h3>{item.title}</h3>
                                    </div>
                                    <p>{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-us">
                <div className="container why-grid">
                    <div className="why-img">
                        <img src="/images/outsideImage.jpg" alt="Yoga Session" />
                    </div>
                    <div className="why-content">
                        <h2>Why Choose Our Space</h2>
                        <ul className="why-list">
                            {whyChooseUs.map((item, index) => (
                                <li key={index}>
                                    <div className="bullet"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container text-center">
                    <h2>Book Your Space Today</h2>
                    <p>Ready to host your next class or workshop? Secure your preferred slot now.</p>
                    <button onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary btn-lg">Book Space Now</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
