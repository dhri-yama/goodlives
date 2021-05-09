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

function App() {
  return (
    <div className="App ">
      <Navbar/>    
      <Hero className=""/>  
      <WhyGoodlives/>
      <Expertise/>
      
      <div style={{"margin-top":"650px"}}>
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
