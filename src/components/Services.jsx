// React import removed: not required with newer JSX transforms

const Services = () => {
  const services = [
    {
      icon: "📝",
      title: "Personal Tax Filing",
      description: "Individual tax returns, T4s, T5s, deductions, and credits optimization.",
      price: "From $99"
    },
    {
      icon: "🏢",
      title: "Corporate Tax",
      description: "Corporate tax returns, T2 filing, GST/HST, and payroll for businesses.",
      price: "From $499"
    },
    {
      icon: "📊",
      title: "Bookkeeping",
      description: "Monthly/quarterly bookkeeping, financial statements, and reconciliations.",
      price: "Custom Quote"
    },
    {
      icon: "🌍",
      title: "Cross-Border Tax",
      description: "US-Canada tax filing for individuals and businesses with international income.",
      price: "From $399"
    },
    {
      icon: "💼",
      title: "Financial Planning",
      description: "Retirement planning, investment strategies, and wealth management.",
      price: "Consultation"
    },
    {
      icon: "⚖️",
      title: "CRA Representation",
      description: "Audit support, tax dispute resolution, and CRA negotiations.",
      price: "From $299"
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <span className="section-tag">What We Offer</span>
        <h2>Comprehensive Tax & Accounting Services</h2>
        <p className="section-subtitle">
          From personal tax returns to complex corporate structures, we've got you covered
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-footer">
                <span className="service-price">{service.price}</span>
                <button className="service-link">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services