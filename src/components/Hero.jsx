import { useRef } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlitchText from './GlitchText';

import architectImg from '../assets/architect.png';
import codeFlowImg from '../assets/code_flow.png';
import uiSystemImg from '../assets/ui_system.png';

const Hero = () => {
    const container = useRef();

    useGSAP(() => {
        // Ensure ScrollTrigger is ready
        ScrollTrigger.refresh();

        // Reveal Hero Text with Clip Path Mask
        const tl = gsap.timeline();

        // Main Architectural Wipe
        tl.fromTo(".hero-mask",
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5, ease: "expo.inOut" }
        )
            .fromTo(".hero-line",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" },
                "-=0.8"
            )
            .fromTo(".hero-sub",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(".hero-btn",
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
                "-=0.3"
            );

        // Cards Scroll Reveal
        gsap.fromTo(".hero-card",
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".hero-grid",
                    start: "top 80%",
                    once: true
                }
            }
        );

        // Floating animation for images
        gsap.to(".floating-img", {
            y: -15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Headline Gravity / Magnetic Typography
        const heroTitle = container.current.querySelector("h1");
        const handleMouseMove = (e) => {
            const rect = container.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(heroTitle, {
                x: x * 30,
                y: y * 30,
                rotationX: -y * 10,
                rotationY: x * 10,
                duration: 0.8,
                ease: "power2.out",
                transformPerspective: 1000
            });
        };

        const handleMouseLeave = () => {
            gsap.to(heroTitle, {
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                duration: 1,
                ease: "power4.out"
            });
        };

        container.current.addEventListener("mousemove", handleMouseMove);
        container.current.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (container.current) {
                container.current.removeEventListener("mousemove", handleMouseMove);
                container.current.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, { scope: container });

    return (
        <section ref={container} className="min-h-screen px-4 pb-20 pt-24 md:pt-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto hero-mask">
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
                    {/* Left Column: Brand Content */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-2 overflow-hidden">
                                <div className="hero-line text-[10px] md:text-[11px] font-bold leading-tight uppercase w-full sm:w-20 text-brand-green">
                                    building the architecture of global digital products
                                </div>
                                <h1 className="hero-line text-[12vw] sm:text-[10vw] lg:text-[100px] font-bold leading-[0.85] tracking-tight uppercase">
                                    <GlitchText text="WE DESIGN" /><br />
                                    <GlitchText text="BRANDS THAT" delay={0.2} /><br />
                                    <GlitchText text="SPEAK" delay={0.4} /> <sup>&</sup> <GlitchText text="WORK" delay={0.6} />
                                </h1>
                            </div>

                            <div className="hero-sub flex items-start gap-4 md:gap-8 mt-4 md:mt-8">
                                <div className="hidden sm:flex flex-col gap-1">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="w-12 h-6 border border-black/10 rounded-full overflow-hidden flex items-center justify-center">
                                            <div className="w-[1px] h-full bg-brand-green/30"></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="max-w-xs md:max-w-[200px] text-[10px] md:text-[11px] font-bold uppercase leading-relaxed text-black/60">
                                    Synthaxx Solutions: We build software that scales and branding that resonates with your true audience.
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
                                <Link
                                    to="/contact"
                                    data-cursor="LAUNCH"
                                    className="hero-btn w-full sm:w-auto bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm flex items-center justify-center gap-4 hover:bg-brand-green transition-all uppercase group"
                                >
                                    Launch Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/expertise"
                                    data-cursor="EXPLORE"
                                    className="hero-btn w-full sm:w-auto border border-black px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all uppercase flex items-center justify-center"
                                >
                                    Expertise
                                </Link>
                            </div>
                        </div>

                        <div className="hero-sub mt-16 md:mt-24 border-t border-black pt-8">
                            <div className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
                                500 <span className="text-brand-green">+</span>
                            </div>
                            <div className="max-w-md text-[10px] md:text-[11px] font-bold uppercase leading-relaxed text-black/60 mb-6 font-syne">
                                SOFTWARE SOLUTIONS, WEB APPLICATIONS, SAAS PRODUCTS, AND BRAND IDENTITY SYSTEMS DELIVERED BY SYNTHAXX FOR FORWARD-THINKING ENTERPRISES WORLDWIDE.
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="px-3 md:px-4 py-1 bg-black text-white rounded-full text-[9px] md:text-[10px] font-bold uppercase flex items-center gap-1 group cursor-pointer hover:bg-brand-green transition-colors">
                                    Development <span className="text-[14px] leading-none text-brand-green group-hover:text-white">*</span>
                                </div>
                                <div className="px-3 md:px-4 py-1 border border-black rounded-full text-[9px] md:text-[10px] font-bold uppercase cursor-default">
                                    Engineering
                                </div>
                                <div className="px-3 md:px-4 py-1 border border-black rounded-full text-[9px] md:text-[10px] font-bold uppercase cursor-default">
                                    Visual Identity
                                </div>
                            </div>

                            <div className="relative mt-8 w-20 h-20 md:w-24 md:h-24">
                                <div className="absolute inset-0 border border-brand-green border-dashed rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                    <div className="text-[7px] md:text-[8px] font-black uppercase tracking-widest whitespace-nowrap text-brand-green px-2">
                                        SYNTHAXX SOLUTIONS • SYNTHAXX SOLUTIONS •
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                                        <ArrowRight className="rotate-90" size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Grid Content */}
                    <div className="hero-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Software Dev Card */}
                        <div className="hero-card bg-accent-green-light p-6 md:p-8 aspect-square flex flex-col justify-between border border-black relative overflow-hidden group cursor-pointer" data-cursor="CODE">
                            <div className="w-12 h-[1px] bg-black"></div>
                            <div className="grid grid-cols-2 gap-4 text-[9px] md:text-[10px] font-bold uppercase leading-tight">
                                <div>
                                    the logic of code driving complex systems, ensuring performance at every scale
                                </div>
                                <div>
                                    robust software architecture meets seamless user experiences in every line
                                </div>
                            </div>
                            <div className="flex gap-2 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 border border-black rounded-full group-hover:bg-brand-green transition-colors"></div>
                                ))}
                            </div>
                            <div className="absolute bottom-6 right-6 w-8 h-8 animate-[spin_6s_linear_infinite]">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" fill="currentColor" className="text-black group-hover:text-brand-green transition-colors" />
                                </svg>
                            </div>
                        </div>

                        {/* Backend Arch */}
                        <div className="hero-card relative aspect-[3/4] arch-top overflow-hidden border border-black" data-cursor="VIEW">
                            <img src={codeFlowImg} alt="Source Code" loading="eager" decoding="sync" className="floating-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                                <div className="text-white">
                                    <div className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white">backend</div>
                                    <div className="text-[9px] md:text-[10px] uppercase font-bold opacity-70 max-w-[150px]">
                                        engineering the robust engines behind modern digital products
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 w-6 h-6 border border-brand-green/50 rounded-full flex items-center justify-center">
                                <div className="w-1 h-1 bg-brand-green rounded-full shadow-[0_0_8px_rgba(0,168,120,0.8)]"></div>
                            </div>
                        </div>

                        {/* Developer Portrait Arch */}
                        <div className="hero-card relative aspect-[4/5] arch-top overflow-hidden border border-black sm:mt-[-40px]" data-cursor="DEV">
                            <img src={architectImg} alt="Software Developer" loading="eager" decoding="sync" className="floating-img w-full h-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center pointer-events-none">
                                <div className="text-white text-lg md:text-xl font-serif italic mb-2 tracking-widest drop-shadow-lg">SYNTHAXX_V.1</div>
                            </div>
                            <div className="absolute top-1/2 left-0 w-8 h-8 bg-brand-green/20 backdrop-blur-sm border border-brand-green/40 rounded-full flex items-center justify-center translate-x-4 hover:scale-110 transition-transform cursor-pointer">
                                <Plus size={16} className="text-white" />
                            </div>
                        </div>

                        {/* Layout Blueprint Card */}
                        <div className="hero-card bg-accent-green-mint p-6 md:p-8 aspect-square flex flex-col border border-black sm:mt-4 relative overflow-hidden group cursor-pointer" data-cursor="UI/UX">
                            <div className="absolute top-4 right-4 text-black group-hover:text-brand-green transition-colors">
                                <svg width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M0 0 L20 0 L20 2 L2 2 L2 20 L0 20 Z" fill="currentColor" />
                                </svg>
                            </div>
                            <img src={uiSystemImg} alt="Web Layout Blueprint" className="floating-img w-full h-full object-contain mix-blend-multiply opacity-80" />
                            <div className="flex justify-between items-end mt-4">
                                <div className="text-2xl md:text-3xl font-bold uppercase -rotate-90 origin-bottom-left translate-x-8 -translate-y-4">layout.</div>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-10 md:h-12 border border-black rounded-full group-hover:border-brand-green transition-colors"></div>
                                    <div className="w-6 md:w-8 h-10 md:h-12 border border-black rounded-full flex items-center justify-center group-hover:border-brand-green transition-colors">
                                        <div className="w-3 md:w-4 h-3 md:h-4 bg-black rounded-full group-hover:bg-brand-green transition-colors"></div>
                                    </div>
                                    <div className="w-1.5 h-10 md:h-12 border border-black rounded-full group-hover:border-brand-green transition-colors"></div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-card sm:col-span-2 border border-black rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 sm:mt-4">
                            <div className="text-3xl md:text-4xl font-bold">SX</div>
                            <div className="text-[9px] font-bold uppercase leading-tight sm:max-w-[200px] sm:border-l border-black sm:pl-4">
                                Synthaxx Solutions: modern software engineering remixed with a design-first approach, evoking the essence of visual and functional harmony.
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-brand-green rounded-full shadow-[0_0_5px_rgba(0,168,120,0.5)]"></div>
                                <div className="text-[11px] md:text-[12px] font-bold">2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
