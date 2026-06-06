import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Statistics />
        <Testimonials />
      </main>
    </div>
  )
}

export default App