import { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare, Info } from 'lucide-react';
import './Booking.css';

const Booking = () => {
    const [formData, setFormData] = useState({
        studio: '1',
        date: '',
        time: '',
        duration: '1',
        participants: '',
        purpose: 'class',
        email: '',
        phone: '',
        requirements: '',
    });

    const faqs = [
        { q: "How far in advance should I book?", a: "We recommend booking at least 2 weeks in advance for regular slots and 1-2 months for retreats." },
        { q: "Can I book recurring slots?", a: "Yes, we offer discounted rates for recurring weekly or monthly bookings." },
        { q: "What if I cancel?", a: "Full refund for cancellations made 48 hours prior. 50% refund within 24-48 hours." },
        { q: "Is there a minimum time?", a: "The minimum booking duration is 1 hour." },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking request submitted! We will contact you shortly to confirm.");
    };

    return (
        <div className="booking-page">
            <header className="page-header booking-header">
                <div className="container">
                    <h1>Book Your Space</h1>
                    <p>Reserve your preferred studio for practice, classes, or retreats.</p>
                </div>
            </header>

            <section className="booking-main">
                <div className="container grid-booking">
                    <div className="booking-form-container">
                        <h2>Booking Form</h2>
                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-group">
                                <label>Select Studio</label>
                                <select value={formData.studio} onChange={(e) => setFormData({ ...formData, studio: e.target.value })}>
                                    <option value="1">Studio 1 – Main Yoga Hall</option>
                                    <option value="2">Studio 2 – Private Studio</option>
                                </select>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Choose Date</label>
                                    <input type="date" required />
                                </div>
                                <div className="form-group">
                                    <label>Preferred Time</label>
                                    <input type="time" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Duration (Hours)</label>
                                    <input type="number" min="1" placeholder="1" required />
                                </div>
                                <div className="form-group">
                                    <label>No. of Participants</label>
                                    <input type="number" min="1" placeholder="Max 30" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Purpose</label>
                                <select value={formData.purpose} onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}>
                                    <option value="class">Yoga Class / Session</option>
                                    <option value="workshop">Workshop / Event</option>
                                    <option value="private">Private Practice</option>
                                    <option value="retreat">Retreat</option>
                                </select>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="email@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Special Requirements</label>
                                <textarea rows="4" placeholder="Any specific equipment or setup needed?"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit Booking Request</button>
                        </form>
                    </div>

                    <div className="booking-sidebar">
                        <div className="sidebar-box schedule-preview">
                            <h3><Calendar size={20} /> Today's Schedule</h3>
                            <div className="schedule-list">
                                <div className="schedule-item">
                                    <span className="time">07:00 AM - 08:30 AM</span>
                                    <span className="event">Morning Vinyasa Flow (Studio 1)</span>
                                </div>
                                <div className="schedule-item available">
                                    <span className="time">09:00 AM - 11:00 AM</span>
                                    <span className="event">Available for Booking</span>
                                </div>
                                <div className="schedule-item">
                                    <span className="time">11:30 AM - 12:30 PM</span>
                                    <span className="event">Private Session (Studio 2)</span>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-box policies">
                            <h3><Info size={20} /> Booking Policies</h3>
                            <ul>
                                <li>Advance booking required for all slots.</li>
                                <li>Please arrive 10 minutes early.</li>
                                <li>Equipment must be handled with care.</li>
                                <li>Payments are required to secure the slot.</li>
                            </ul>
                        </div>

                        <div className="sidebar-box how-to">
                            <h3>How to Book</h3>
                            <ol>
                                <li>Choose your studio and time</li>
                                <li>Submit the booking form</li>
                                <li>Receive confirmation by email</li>
                                <li>Make payment to secure slot</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Frequently Asked Questions</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="faq-grid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-card">
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Booking;
