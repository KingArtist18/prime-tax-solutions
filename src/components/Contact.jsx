import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // For demo purposes, just show success message
    // In production, you'd send to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-container">
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2>Let's Talk About Your Taxes</h2>
            <p>
              Whether you have a question about your tax situation or want to book 
              a consultation, our team is here to help.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Financial District, Toronto, ON M5V 1A1</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (888) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@primetaxsolutions.ca</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon-Fri: 9am - 6pm<br />Sat: 10am - 2pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            {submitted && (
              <div className="success-message">
                ✅ Thanks! We'll get back to you within 24 hours.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select Service</option>
                    <option value="personal">Personal Tax Filing</option>
                    <option value="corporate">Corporate Tax</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="crossborder">Cross-Border Tax</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message →
              </button>
              <p className="form-note">
                🔒 Your information is secure and will not be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact