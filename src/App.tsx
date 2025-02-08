import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AP1 } from './pages/AP1';
import { AP2 } from './pages/AP2';
import{CourseMaterials} from './pages/Cours_TDs'
import { Engineering } from './pages/Engineering';
import { EngineeringProgram } from './pages/EngineeringProgram'; // Ensure this is the correct file path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ap1" element={<AP1 />} />
        <Route path="/ap2" element={<AP2 />} />
        <Route path="/CourseMaterials" element={< CourseMaterials/>} />
        <Route path="/Engineering" element={<Engineering />} />
        <Route path="/Engineering/:program" element={<EngineeringProgram />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;
