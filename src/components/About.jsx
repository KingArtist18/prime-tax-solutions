const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image">
            <div className="about-image-inner">
              <div className="exp-badge">15+ Years of Excellence</div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-tag">About Us</span>
            <h2>Canada's Trusted Tax & Accounting Partner</h2>
            <p>
              Prime Tax Solutions was founded with a simple mission: to make tax 
              preparation and accounting accessible, transparent, and stress-free 
              for every Canadian.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">✅</div>
                <div>
                  <h4>CRA Certified Experts</h4>
                  <p>All our accountants are fully certified and up-to-date with CRA regulations</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">🔒</div>
                <div>
                  <h4>Secure & Confidential</h4>
                  <p>Your financial data is protected with bank-grade encryption</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div>
                  <h4>Fast Turnaround</h4>
                  <p>Most tax returns completed within 48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About