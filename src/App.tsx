import { useState, useEffect } from 'react'
import Nav from './components/Nav';
import robot from './assets/robot.gif';
// import './App.css';
import Banner from './components/Banner';
import Objective from './components/Objective';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {

  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }, []);


  return (
    <div className='bg-primary text-blue-100'>
      {loading ? 
      <div className='grid justify-items-center content-center h-screen'>
        <img src={robot} alt="" />
      </div> : 
        <>
          <Nav />
          <div className='max-w-screen-xl mx-auto p-4'>
            <div className='pt-28' id='home'>
              <Banner />
            </div>
            <div className='pt-28' id='objective'>
              <Objective />
            </div>
            <div className='pt-28' id='skills'>

              <Skills />
            </div>
            <div className='pt-28' id='services'>
              <Services />
            </div>
            <div className='pt-28' id='experience'>
              <Experience />
            </div>
            <div className='pt-28' id='contact'>
              <Contact />
            </div>
          </div>
          <div>
          </div>
        </>
      }
      {/* <AnimatePresence> */}
      {/* </AnimatePresence> */}

      {/* <motion.div  className="primary" style={{ scaleX: scrollYProgress }} />   */}
      
    </div>
  )
}

export default App
