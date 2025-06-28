import Main from "./pages/Main";
import Footer from "./components/Footer";
import Heads from "./components/Heads";
import {Routes, Route} from 'react-router-dom'
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";


function App() {
  return (
    <div>
       <Heads/>
       <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Certificate" element={<Certificate/>}/>
          <Route path="/Contact" element={<Contact/>}/>
       </Routes>
      
       <Footer/>
    </div>

  )
}

export default App;