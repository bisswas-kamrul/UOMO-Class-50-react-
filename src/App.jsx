import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/page/Home';
import Rootlayout from './components/Rootlayout';
import Shop from './components/page/Shop';
import Blog from './components/page/Blog';
import Pages from './components/page/Pages';
import About from './components/page/About';
import Contact from './components/page/Contact';

function App() {

  return (
  <Routes>
  <Route path="/" element={<Rootlayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/Shop" element={<Shop />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/Pages" element={<Pages />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
  </Route>
</Routes>
  )
}

export default App
