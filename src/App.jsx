/* eslint-disable react/react-in-jsx-scope */
import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Classify from './pages/Classify';
import Resource from './pages/Resource';
import Artikel from './pages/Artikel';
import Detail from './pages/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Abouts />} />
      <Route path="/klasifikasikan" element={<Classify />} />
      <Route path="/resource" element={<Resource />} />
      <Route path="/article" element={<Artikel />} />
      <Route path="/article/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
