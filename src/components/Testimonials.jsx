import { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Toronto, ON",
      role: "Small Business Owner",
      rating: 5,
      text: "Prime Tax Solutions has been managing my business taxes for 3 years now. They've saved me thousands in deductions I didn't even know existed! Professional, responsive, and truly cares about their clients.",
      image: "👩‍💼"
    },
    {
      id: 2,
      name: "David Chen",
      location: "Vancouver, BC",
      role: "Software Engineer",
      rating: 5,
      text: "As someone with US and Canadian investments, my taxes are complicated. Their cross-border team made the process seamless. Highly recommended for anyone with complex tax situations.",
      image: "👨‍💻"
    },
    {
      id: 3,
      name: "Michael Thompson",
      location: "Calgary, AB",
      role: "Real Estate Investor",
      rating: 5,
      text: "Outstanding service! They helped me structure my real estate portfolio to minimize taxes while staying fully compliant with CRA. Worth every penny.",
      image: "🏠"
    },
    {
      id: 4,
      name: "Lisa Patel",
      location: "Montreal, QC",
      role: "Medical Professional",
      rating: 5,
      text: "I switched to Prime Tax after a bad experience elsewhere. The difference is night and day. They're thorough, transparent, and actually answer my questions in plain English.",
      image: "👩‍⚕️"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = window.innerWidth > 768 ? 2 : 1
  const maxIndex = testimonials.length - itemsPerView

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <span className="section-tag">Client Stories</span>
        <h2>What Our Clients Say</h2>
        <p className="section-subtitle">
          Trusted by hundreds of Canadians across the country
        </p>
        
        <div className="testimonial-slider">
          <button className="slider-btn prev" onClick={prevSlide} disabled={currentIndex === 0}>
            ←
          </button>
          <div className="testimonial-track">
            <div 
              className="testimonial-grid" 
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">{testimonial.image}</div>
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p className="testimonial-meta">{testimonial.location} • {testimonial.role}</p>
                    </div>
                  </div>
                  <div className="testimonial-rating">
                    {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
          <button className="slider-btn next" onClick={nextSlide} disabled={currentIndex >= maxIndex}>
            →
          </button>
        </div>
        
        <div className="rating-summary">
          <div className="rating-badge">
            <span className="rating-stars">★★★★★</span>
            <span className="rating-score">5.0</span>
          </div>
          <p>Based on 500+ Google Reviews</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials