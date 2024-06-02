import React from 'react';
import './Footer.css'; // Assuming you have some CSS for styling

const Footer = () => (
  <footer className="footer mt-5 p-3 text-white bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <p>For orders and inquiries:</p>
          <p>Email: orders@beautyproducts.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <ul className="list-unstyled">
            <li><a href="https://facebook.com/beautyproducts" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com/beautyproducts" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com/beautyproducts" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com/company/beautyproducts" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="col-md-4 text-center">
          <p>Thank You for Visiting Our Website!!</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
