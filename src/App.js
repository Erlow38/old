import './style/App.css';
import IndexPage from './routes/IndexPage';
import About from './routes/About';
import Skills from './routes/Skills';
import Projects from "./routes/Projects";
import Experiences from "./routes/Experiences";
import TroisDimension from './routes/TroisDimension';
import { Routes, Route } from 'react-router-dom';
import TOPOLOGY from 'vanta/src/vanta.topology';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const colors = [0x4d4d4d, 0x336699, 0x993333, 0x339966, 0x663399, 0x996633];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const vantaEffect = TOPOLOGY({
      el: '#vanta',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: randomColor,
      backgroundColor: 0x0,
    })
  })

  return (
      <div className="App">
        <span id='vanta'></span>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/troisdimension" element={<TroisDimension />} />
        </Routes>

      </div>
  );
}

export default App;
