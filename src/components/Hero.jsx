// React import removed because it's not used (JSX runtime handles it)

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">🇨🇦 Trusted by 5000+ Canadian Businesses</div>
          <h1>
            Expert Tax & Accounting <br />
            <span className="hero-highlight">Solutions for Canadians</span>
          </h1>
          <p>
            Maximize your returns, minimize your stress. Prime Tax Solutions provides 
            professional tax preparation, accounting, and financial advisory services 
            tailored to individuals and businesses across Canada.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Book Free Consultation →</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Client Support</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <div className="card-icon">📊</div>
            <p>Tax Deadline: April 30, 2025</p>
            <small>Don't miss your filing date</small>
          </div>
          <div className="hero-card hero-card-2">
            <div className="card-icon">💰</div>
            <p>Average Return: $1,850</p>
            <small>For individual tax filers</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero