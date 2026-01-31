import { useRef } from 'react';
import { ArrowRight, Globe, Layers, Zap, Smartphone, Search, Monitor, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import GlitchText from '../components/GlitchText';

const WebDev = () => {
    const container = useRef();

    const capabilities = [
        {
            title: "Performance First",
            desc: "Sub-second load times using Next.js, Vite, and advanced caching strategies.",
            icon: <Zap className="text-brand-green" />
        },
        {
            title: "Responsive Systems",
            desc: "Fluid layouts that adapt perfectly from 4K displays to small mobile screens.",
            icon: <Smartphone className="text-brand-green" />
        },
        {
            title: "SEO Architecture",
            desc: "Semantic HTML and schema markup to ensure your brand dominates the search results.",
            icon: <Search className="text-brand-green" />
        },
        {
            title: "Interactive UI",
            desc: "Immersive experiences using GSAP and Framer Motion for high-end micro-interactions.",
            icon: <Monitor className="text-brand-green" />
        }
    ];

    useGSAP(() => {
        ScrollTrigger.refresh();

        gsap.from(".web-hero-line", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });

        gsap.from(".capability-card", {
            scrollTrigger: {
                trigger: ".capability-grid",
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <div ref={container} className="pt-24 md:pt-32 pb-20 px-4 min-h-screen">
            <SEO
                title="Web Engineering"
                description="Immersive, high-performance web experiences built with cutting-edge technology and precision design."
            />
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-40">
                    <div>
                        <div className="mb-8 md:mb-12 overflow-hidden">
                            <h1 className="web-hero-line text-[12vw] md:text-[120px] font-bold leading-[0.8] tracking-tighter uppercase mb-6 md:mb-8 transition-transform duration-75">
                                <GlitchText text="DIGITAL" /> <span className="text-brand-green"><GlitchText text="FRONTIER" delay={0.2} /></span><br />
                                <GlitchText text="EXPERIENCE" delay={0.4} />
                            </h1>
                            <p className="web-hero-line text-base md:text-lg font-bold uppercase text-black/40 max-w-lg leading-tight">
                                We architect high-end web applications that bridge the gap between technical complexity and pure visual storytelling.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/software" data-cursor="EXPLORE" className="bg-black text-white px-8 py-5 rounded-full font-bold uppercase text-sm hover:bg-brand-green transition-colors inline-block text-center">
                                View Stack
                            </Link>
                            <div className="flex items-center gap-2 px-6 py-4 sm:py-0 border border-black rounded-full font-bold text-[10px] uppercase tracking-widest justify-center">
                                <Globe size={14} className="text-brand-green animate-pulse" /> Global Edge Delivery
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-auto md:aspect-square bg-accent-green-light rounded-[32px] md:rounded-[40px] border border-black p-8 md:p-16 flex flex-col justify-center gap-8 overflow-hidden group min-h-[350px]">
                        <div className="absolute top-0 right-0 p-8">
                            <Layers size={100} className="text-black/5 group-hover:text-brand-green/10 transition-colors" />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="w-12 md:w-16 h-1 bg-black"></div>
                            <div className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">FUTURE<br />PROOF.</div>
                            <p className="max-w-xs font-bold uppercase text-[10px] md:text-xs text-black/60 leading-relaxed">
                                Our web solutions are built on modern primitives that ensure longevity, security, and world-class accessibility standards.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="capability-grid grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-black border border-black mb-24 md:mb-40">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="capability-card bg-white p-8 md:p-10 flex flex-col justify-between aspect-square group hover:bg-black hover:text-white transition-all cursor-pointer" data-cursor="WEB">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-black group-hover:border-brand-green rounded-full flex items-center justify-center transition-colors">
                                {cap.icon}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4 tracking-tight">{cap.title}</h3>
                                <p className="text-[10px] md:text-xs font-bold uppercase text-black/40 group-hover:text-accent-green-light leading-relaxed">
                                    {cap.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-accent-green-mint border border-black rounded-[40px] md:rounded-[60px] p-10 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-green"></div>
                    <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-8 md:mb-12 relative z-10">
                        NEED A <span className="text-brand-green">WEB</span> REVOLUTION?
                    </h2>
                    <Link to="/contact" data-cursor="START" className="bg-black text-white px-10 md:px-16 py-6 md:py-8 rounded-full font-bold text-lg md:text-xl uppercase hover:bg-brand-green transition-all relative z-10 flex items-center justify-center gap-4">
                        BUILD FOR THE WEB <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WebDev;
