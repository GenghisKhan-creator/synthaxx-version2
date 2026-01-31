import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Expertise from './pages/Expertise';
import Software from './pages/Software';
import Branding from './pages/Branding';
import AI from './pages/AI';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import TestimonialsPage from './pages/TestimonialsPage';
import WebDev from './pages/WebDev';
import NotFound from './pages/NotFound';
import './App.css';

import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import CornerHUD from './components/CornerHUD';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/expertise" element={<PageTransition><Expertise /></PageTransition>} />
        <Route path="/software" element={<PageTransition><Software /></PageTransition>} />
        <Route path="/web-dev" element={<PageTransition><WebDev /></PageTransition>} />
        <Route path="/branding" element={<PageTransition><Branding /></PageTransition>} />
        <Route path="/ai" element={<PageTransition><AI /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/portfolio/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/testimonials" element={<PageTransition><TestimonialsPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Global Theme Snapping
    const themes = document.querySelectorAll('[data-theme="dark"]');
    themes.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => document.body.classList.add('theme-dark'),
        onLeave: () => document.body.classList.remove('theme-dark'),
        onEnterBack: () => document.body.classList.add('theme-dark'),
        onLeaveBack: () => document.body.classList.remove('theme-dark'),
      });
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Preloader onComplete={() => setIsLoading(false)} />
      <CustomCursor />
      <CornerHUD />

      {!isLoading && (
        <div className="min-h-screen bg-white selection:bg-brand-green selection:text-white bg-grid font-outfit">
          <div className="noise-overlay"></div>
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>

          <footer className="py-20 border-t border-black px-6">
            <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-12">
              <div className="col-span-2">
                <Link to="/" className="text-4xl font-bold uppercase mb-6 tracking-tighter block hover:text-brand-green transition-colors">Synthaxx<br />Solutions.</Link>
                <p className="max-w-xs text-sm font-bold uppercase text-black/40">
                  Architecting the digital future with precision and purpose. Forward-thinking solutions for enterprise leaders.
                </p>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Explore</h4>
                <ul className="space-y-4 text-sm font-bold uppercase">
                  <li><Link to="/expertise" className="hover:text-brand-green">Expertise</Link></li>
                  <li><Link to="/software" className="hover:text-brand-green">Software</Link></li>
                  <li><Link to="/web-dev" className="hover:text-brand-green">Web Dev</Link></li>
                  <li><Link to="/branding" className="hover:text-brand-green">Branding</Link></li>
                  <li><Link to="/portfolio" className="hover:text-brand-green">Portfolio</Link></li>
                  <li><Link to="/testimonials" className="hover:text-brand-green">Testimonials</Link></li>
                  <li><Link to="/contact" className="hover:text-brand-green">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-6">Connect</h4>
                <ul className="space-y-4 text-sm font-bold uppercase">
                  <li><a href="#" className="hover:text-brand-green">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-brand-green">X / Twitter</a></li>
                  <li><a href="#" className="hover:text-brand-green">GitHub</a></li>
                </ul>
              </div>
            </div>
            <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-black/10 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-black/40">
              <div>© 2026 SYNTHAXX SOLUTIONS. ALL RIGHTS RESERVED.</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-black">Privacy Policy</a>
                <a href="#" className="hover:text-black">Terms of Service</a>
              </div>
            </div>
          </footer>
        </div>
      )}
    </Router>
  );
}

export default App;
