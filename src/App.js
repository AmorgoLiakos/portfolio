import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from "./components/Home"
import Work from "./components/Work"
import About from "./components/About"
import Contact from "./components/Contact"

import  "./app.css"

function App() {
  return (
    <>       
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
