import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Websites from './components/Websites/Websites';
import MiniProjects from './components/MiniProjects/MiniProjects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/website' element={<Websites/>}/>
        <Route path='/miniprojects' element={<MiniProjects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
