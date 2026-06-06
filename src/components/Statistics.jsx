import { useState, useEffect } from 'react'

const Statistics = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    returns: 0,
    years: 0,
    satisfaction: 0
  })

  useEffect(() => {
    const targets = {
      clients: 5000,
      returns: 15000,
      years: 15,
      satisfaction: 98
    }

    const duration = 2000
    const stepTime = 20
    const steps = duration / stepTime

    let currentStep = 0
    const incrementors = {}

    for (let key in targets) {
      incrementors[key] = targets[key] / steps
    }

    const timer = setInterval(() => {
      currentStep++
      setCounts({
        clients: Math.min(Math.floor(incrementors.clients * currentStep), targets.clients),
        returns: Math.min(Math.floor(incrementors.returns * currentStep), targets.returns),
        years: Math.min(Math.floor(incrementors.years * currentStep), targets.years),
        satisfaction: Math.min(Math.floor(incrementors.satisfaction * currentStep), targets.satisfaction)
      })
      
      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [])  // Empty dependency array - this runs once when component mounts

  const stats = [
    { number: counts.clients, suffix: "+", label: "Happy Clients" },
    { number: counts.returns, suffix: "+", label: "Tax Returns Filed" },
    { number: counts.years, suffix: "", label: "Years Experience" },
    { number: counts.satisfaction, suffix: "%", label: "Client Satisfaction" }
  ]

  return (
    <section className="statistics">
      <div className="container">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number-large">
                {stat.number}{stat.suffix}
              </div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics