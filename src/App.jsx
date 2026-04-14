import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './Hero'
import Feature from './Feature'
import HowItWork from './HowItWork'
import Proven from './Proven'
import Cards from './Card'
import Security from './Security'
import EndToEnd from './Endtoend'
import Team from './Team'
import Active from './Active'
import Audit from './Audit'
import Talk from './Talk'
import Footer from './Footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Feature />
              <HowItWork />
              <Proven />
              <Cards />
              <Security />
              <EndToEnd />
              <Team />
              <Active />
              <Talk />
              <Footer />
            </>
          }
        />
        <Route path="/audits" element={<Audit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
