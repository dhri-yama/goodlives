import {useState} from 'react'
import './index.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import BlogSection from './components/BlogSection';
import Testimonials from './components/Testimonials';
import Expertise from './components/Expertise';
import FreeConsultation from './components/FreeConsultation';
import WhyGoodlives from './components/WhyGoodlives';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App ">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero/>  
      <WhyGoodlives/>
      <Expertise/>
      
      <div style={{"marginTop":"650px"}}>
        <FreeConsultation/>
      </div>
      
      <BlogSection/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
