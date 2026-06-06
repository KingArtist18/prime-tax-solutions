const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">💰</span>
              <span className="logo-text">Prime Tax <span className="logo-accent">Solutions</span></span>
            </div>
            <p>Your trusted partner for tax and accounting services across Canada.</p>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">📸</a>
              <a href="#">💼</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Personal Tax</a></li>
              <li><a href="#">Corporate Tax</a></li>
              <li><a href="#">Bookkeeping</a></li>
              <li><a href="#">Cross-Border</a></li>
              <li><a href="#">CRA Representation</a></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4>Tax Tips Newsletter</h4>
            <p>Get tax-saving tips and deadline reminders.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Prime Tax Solutions. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer