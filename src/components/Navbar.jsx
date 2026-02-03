import { useState, useEffect } from 'react';
import { ArrowUpRight, Search, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

const ScrambleText = ({ text, className, onMouseEnter }) => {
    const [displayText, setDisplayText] = useState(text);
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";

    const scramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text.split("").map((char, index) => {
                    if (index < iteration) return text[index];
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setDisplayText(text);
            }
            iteration += 1 / 3;
        }, 30);
    };

    return (
        <span
            className={`${className} font-mono`}
            onMouseEnter={() => {
                scramble();
                if (onMouseEnter) onMouseEnter();
            }}
        >
            {displayText}
        </span>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { label: 'EXPERTISE', path: '/expertise' },
        { label: 'SOFTWARE', path: '/software' },
        { label: 'WEB DEV', path: '/web-dev' },
        { label: 'BRANDING', path: '/branding' },
        { label: 'PORTFOLIO', path: '/portfolio' },
        { label: 'TESTIMONIALS', path: '/testimonials' },
        { label: 'CONTACT', path: '/contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 bg-white/80 backdrop-blur-md transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between border border-black rounded-full px-4 md:px-6 py-2 bg-white relative z-50 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
                {/* Left: Logo and Name */}
                <Link
                    to="/"
                    data-cursor="HOME"
                    className="flex items-center gap-2 md:gap-4 group"
                >
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-transform group-hover:scale-110">
                        <img src={logoImg} alt="Synthaxx Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <ScrambleText
                            text="SYNTHAXX"
                            className="font-bold text-sm md:text-lg uppercase tracking-tight leading-none text-black w-[100px] md:w-[130px]"
                        />
                        <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Solutions</span>
                    </div>
                </Link>

                {/* Center: Nav links in pills (Desktop) */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            data-cursor={item.label}
                            className={`px-4 py-1.5 border border-black rounded-full text-[13px] font-bold tracking-wider transition-all hover:bg-black hover:text-white ${location.pathname === item.path ? 'bg-black text-white px-6' : ''}`}
                        >
                            <ScrambleText text={item.label} /> {location.pathname === item.path && '•'}
                        </Link>
                    ))}
                </div>

                {/* Right: Search, CTA and Mobile Toggle */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* <div className="p-2 border border-black rounded-full hover:bg-brand-green hover:text-white transition-all cursor-pointer hidden sm:block">
                        <Search size={18} />
                    </div> */}
                    <Link to="/contact" data-cursor="LET'S GO" className="hidden sm:flex bg-black text-white px-5 py-1.5 rounded-full items-center gap-2 font-bold text-[13px] transition-all hover:bg-brand-green group border border-black shadow-[3px_3px_0px_rgba(0,168,120,0.5)] active:shadow-none translate-y-[-1px] active:translate-y-[1px]">
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        <ScrambleText text="GET IN TOUCH" />
                    </Link>

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-4 px-4 lg:hidden z-40 max-h-[80vh] overflow-y-auto"
                    >
                        <div className="bg-white border-2 border-black rounded-[24px] p-6 sm:p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                            <ul className="flex flex-col gap-4 sm:gap-6">
                                {navLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            to={item.path}
                                            className={`text-2xl sm:text-3xl font-black uppercase flex items-center justify-center tracking-tighter block hover:text-brand-green transition-colors ${location.pathname === item.path ? 'text-brand-green' : 'text-black'}`}
                                        >
                                            <ScrambleText text={item.label} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-black/10">
                                <Link
                                    to="/contact"
                                    className="w-full bg-black text-white py-4 sm:py-6 rounded-full flex items-center justify-center gap-4 font-bold text-xl sm:text-2xl uppercase hover:bg-brand-green transition-colors group shadow-[4px_4px_0px_rgba(0,168,120,1)]"
                                >
                                    <ScrambleText text="GET IN TOUCH" /> <ArrowUpRight size={24} />
                                </Link>
                                <div className="mt-8 flex justify-center gap-6 sm:gap-10 text-black/40 font-black uppercase text-[10px] tracking-[0.3em]">
                                    <a href="https://linkedin.com/company/synthaxx-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-black">LinkedIn</a>
                                    <a href="https://x.com/synthaxx" target="_blank" rel="noopener noreferrer" className="hover:text-black">X / Twitter</a>
                                    <a href="https://github.com/synthaxx" target="_blank" rel="noopener noreferrer" className="hover:text-black">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
