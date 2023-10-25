/* eslint-disable react/react-in-jsx-scope */
import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Classify from './pages/Classify';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/klasifikasikan" element={<Classify />} />
    </Routes>
  );
}

export default App;
