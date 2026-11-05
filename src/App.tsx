import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Domains from './sections/Domains';
import Initiatives from './sections/Initiatives';
import Valeurs from './sections/Values';
import Team from './sections/Team';
import Partenaires from './sections/Partenaires';
import Contact from './sections/Contact';
import Fouter from './components/Fouter';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Domains />
      <Initiatives />
      <Valeurs />
      <Team />
      <Partenaires />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partenaires" element={<Partenaires />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Fouter />
    </Router>
  );
}

export default App;
