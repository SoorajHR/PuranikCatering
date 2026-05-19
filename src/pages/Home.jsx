import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaLeaf, FaRegCheckCircle, FaUtensils, FaUserTie, 
  FaClock, FaTags, FaQuoteLeft 
} from 'react-icons/fa';
import '../styles/Home.css';

const AnimatedCounter = ({ end, duration, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration, start]);

  return <>{count}</>;
};

const Home = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const services = [
    { title: "Wedding Catering", desc: "Grand culinary experiences for your special day.", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=600" },
    { title: "Marriage Catering", desc: "Authentic and traditional pure vegetarian feasts.", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=600" },
    { title: "Griha Pravesha", desc: "Auspicious meals for housewarming ceremonies.", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=600" },
    { title: "Event Catering", desc: "Customized menus for corporate & private events.", img: "https://images.unsplash.com/photo-1621285816622-7ad24269d0dc?auto=format&fit=crop&q=80&w=600" },
    { title: "Bulk Catering", desc: "Large-scale food preparation with consistent quality.", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=600" },
    { title: "Institutional", desc: "Daily meal services for schools, colleges, and hostels.", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600" }
  ];

  const features = [
    { icon: <FaLeaf />, title: "Pure Vegetarian", desc: "100% pure vegetarian preparation in separate kitchens." },
    { icon: <FaRegCheckCircle />, title: "Hygienic Preparation", desc: "Strict hygiene standards maintained at all times." },
    { icon: <FaUtensils />, title: "Authentic Taste", desc: "Traditional South Indian recipes passed down generations." },
    { icon: <FaUserTie />, title: "Experienced Team", desc: "Professional chefs and courteous serving staff." },
    { icon: <FaClock />, title: "Timely Service", desc: "Punctual delivery and well-managed buffet systems." },
    { icon: <FaTags />, title: "Affordable Packages", desc: "Premium quality catering that fits your budget." }
  ];

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeIn}>35+ Years of Trusted Vegetarian Catering Excellence</motion.h1>
            <motion.p variants={fadeIn}>Experience authentic South Indian taste and premium hospitality for your special occasions in Shivamogga.</motion.p>
            <motion.div className="hero-btns" variants={fadeIn}>
              <a href="#contact" className="btn btn-primary">Book Catering</a>
              <a href="#services" className="btn btn-secondary">Explore Services</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section bg-light">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="img-wrapper">
                <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800" alt="Puranik Catering Cooking" />
                <div className="experience-badge glass">
                  <h3>35+</h3>
                  <p>Years of Excellence</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-left">Our Story</h2>
              <h4 className="section-subtitle text-left">A Legacy of Taste in Shivamogga</h4>
              <p>
                Founded over three decades ago, Puranik Catering has grown to become Shivamogga's most trusted name in pure vegetarian catering. We blend traditional South Indian culinary secrets with modern presentation and hygiene standards.
              </p>
              <p>
                Whether it's a grand wedding, an intimate Griha Pravesha, or daily meals for schools and hostels, we bring the same dedication to quality, taste, and timely service. Our experienced chefs prepare every meal with devotion, ensuring your guests leave with a memorable culinary experience.
              </p>
              <ul className="about-list">
                <li><FaRegCheckCircle className="text-primary" /> Premium Pure Veg Food</li>
                <li><FaRegCheckCircle className="text-primary" /> Specialized in Weddings & Large Events</li>
                <li><FaRegCheckCircle className="text-primary" /> Trusted by Top Educational Institutions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.h4 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Catering for Every Occasion
          </motion.h4>
          
          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div className="service-card glass" key={index} variants={fadeIn}>
                <div className="service-img">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <h4 className="section-subtitle">The Puranik Promise</h4>
          
          <div className="features-grid">
            {features.map((feat, index) => (
              <motion.div 
                className="feature-card" 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="stats-overlay"></div>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3><AnimatedCounter end={35} duration={2.5} start={statsInView} />+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3><AnimatedCounter end={1000} duration={2.5} start={statsInView} />+</h3>
              <p>Events Served</p>
            </div>
            <div className="stat-item">
              <h3><AnimatedCounter end={50000} duration={2.5} start={statsInView} />+</h3>
              <p>Happy Guests</p>
            </div>
            <div className="stat-item">
              <h3><AnimatedCounter end={100} duration={2.5} start={statsInView} />%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our Gallery</h2>
          <h4 className="section-subtitle">A Glimpse of Our Creations</h4>
          
          <div className="gallery-grid">
            {[1,2,3,4,5,6].map((img, index) => (
              <motion.div 
                className="gallery-item" 
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={services[index].img} alt={`Gallery ${index + 1}`} />
                <div className="gallery-overlay">
                  <span className="zoom-icon">+</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <h4 className="section-subtitle">What Our Guests Say</h4>
          
          <div className="testimonials-grid">
            <motion.div 
              className="testimonial-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">"Puranik Catering handled our wedding of 2000 guests flawlessly. The traditional Malnad food was authentic and everyone praised the taste and hygiene. Best in Shivamogga!"</p>
              <div className="testimonial-author">
                <h4>Ramesh Rao</h4>
                <p>Wedding Event</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="testimonial-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">"We have been using their services for our college hostel for 3 years. The quality is consistent, purely vegetarian, and feels like home-cooked meals."</p>
              <div className="testimonial-author">
                <h4>Srinivas K.</h4>
                <p>Institutional Catering</p>
              </div>
            </motion.div>

            <motion.div 
              className="testimonial-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">"Booked them for our Griha Pravesha. The saffron sweets and traditional South Indian thali were top-notch. Highly professional team."</p>
              <div className="testimonial-author">
                <h4>Lakshmi Narayan</h4>
                <p>Griha Pravesha</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section bg-light">
        <div className="container">
          <div className="contact-wrapper glass-card">
            <div className="contact-info-panel">
              <h2>Get in Touch</h2>
              <p>Ready to plan the menu for your next event? Contact us today for a consultation and tasting.</p>
              
              <div className="contact-details mt-4">
                <div className="detail-item">
                  <h4>Location</h4>
                  <p>Lakshmi Narasimha nilaya, opposite to milk dairy, Hosudi, Shivamogga, Karnataka 577222</p>
                </div>
                <div className="detail-item">
                  <h4>Phone</h4>
                  <p>+91 94486 40029</p>
                </div>
                <div className="detail-item">
                  <h4>Email</h4>
                  <p>info@puranikcatering.com</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-panel">
              <h3>Send an Inquiry</h3>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <select required defaultValue="">
                    <option value="" disabled>Select Event Type</option>
                    <option value="wedding">Wedding Catering</option>
                    <option value="griha">Griha Pravesha</option>
                    <option value="event">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type="date" placeholder="Event Date" />
                </div>
                <div className="form-group">
                  <textarea rows="4" placeholder="Event Details & Guest Count"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
