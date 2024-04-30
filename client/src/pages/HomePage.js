import React from 'react';
import './css/HomePage.css'; // Import CSS for styling

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <CarListings />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Rent a Car</h1>
      {/* Navigation component can be added here */}
    </header>
  );
}

function SearchBar() {
  return (
    <section className="search">
      <h2>Find Your Perfect Car</h2>
      <form>
        <input type="text" placeholder="Enter Location" />
        <input type="date" placeholder="Pickup Date" />
        <input type="date" placeholder="Drop-off Date" />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

function CarListings() {
  return (
    <section className="car-listings">
      <h2>Available Cars</h2>
      <div className="car-card">
        <img src="car-image.jpg" alt="Car" />
        <div className="car-details">
          <h3>Car Model</h3>
          <p>Price: $X per day</p>
          <button>Book Now</button>
        </div>
      </div>
      {/* Additional car listings can be added here */}
    </section>
  );
}

function AboutUs() {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Rent a Car. All rights reserved.</p>
      {/* Social media icons can be added here */}
    </footer>
  );
}

export default HomePage;
