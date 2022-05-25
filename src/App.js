import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './Contact';
import About from './components/About';
import Skills from './components/Skills';
import { useState } from 'react';

function App() {

  const [dark,setDark] = useState(true);
  return (
  <>
    <div className="app_container">
      <div className="nav">
        <Navbar dark={dark} setDark={setDark}/>
      </div>
      <div className="components">
        <Routes>
            <Route path='/' element={<Home dark={dark}/>}/>
            <Route path='/about' element={<About dark={dark}/>}/>
            <Route path='/projects' element={<Projects dark={dark}/>}/>
            <Route path='/skills' element={<Skills dark={dark}/>}/>
            <Route path='/contact' element={<Contact dark={dark}/>}/>
        </Routes>
      </div>
    </div>
    
  </>
  );
}

export default App;
