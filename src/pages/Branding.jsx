import { useRef } from 'react';
import { ArrowRight, Palette, Fingerprint, Type, Layers, Share2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Branding = () => {
    const container = useRef();

    const pillars = [
        {
            title: "Visual Systems",
            desc: "Comprehensive design languages that remain consistent across every digital and physical touchpoint.",
            icon: <Layers className="text-brand-green" />
        },
        {
            title: "Verbal Identity",
            desc: "Crafting a unique brand voice and messaging strategy that cuts through the noise of the marketplace.",
            icon: <Share2 className="text-brand-green" />
        },
        {
            title: "Typography",
            desc: "Precision pairing and custom font systems that define the high-end character of your enterprise.",
            icon: <Type className="text-brand-green" />
        },
        {
            title: "Motion Identity",
            desc: "Defining how your brand moves. Easing curves and interaction patterns that feel natural yet premium.",
            icon: <Sparkles className="text-brand-green" />
        }
    ];

    useGSAP(() => {
        ScrollTrigger.refresh();

        gsap.from(".brand-hero", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(".pillar-item", {
            scrollTrigger: {
                trigger: ".pillar-grid",
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-20 px-4 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <div className="brand-hero text-center mb-40">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-black rounded-full text-[10px] font-bold uppercase tracking-widest mb-10">
                        <Fingerprint size={14} className="text-brand-green" /> Unique Identity Design
                    </div>
                    <h1 className="text-[12vw] md:text-[160px] font-bold leading-[0.7] tracking-tighter uppercase mb-20 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                        EYE <span className="text-brand-green">CANDY</span><br />FOR THE<br />BRAIN.
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl font-medium text-black/60 uppercase leading-snug">
                        We don't just design logos. We architect visual legacies that demand respect and evoke emotion through minimalist precision.
                    </p>
                </div>

                <div className="pillar-grid grid lg:grid-cols-2 gap-px bg-black border border-black mb-40">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="pillar-item bg-white p-12 md:p-20 flex flex-col items-center text-center group hover:bg-black hover:text-white transition-all duration-700 cursor-pointer" data-cursor="IDENTITY">
                            <div className="mb-8 p-6 bg-accent-green-mint rounded-2xl group-hover:bg-accent-green-deep transition-colors">
                                {pillar.icon}
                            </div>
                            <h3 className="text-4xl font-bold uppercase tracking-tight mb-6">{pillar.title}</h3>
                            <p className="max-w-sm text-sm font-bold uppercase text-black/40 group-hover:text-accent-green-light leading-relaxed">
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row gap-1 border border-black p-1 bg-black rounded-[40px] overflow-hidden">
                    <div className="flex-1 bg-white p-12 flex flex-col justify-between aspect-square md:aspect-auto">
                        <h2 className="text-6xl font-bold uppercase tracking-tighter leading-none mb-10">STRATEGY<br />DRIVEN<br />DESIGN.</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center border-b border-black pb-4">
                                <span className="text-xs font-bold uppercase">Market Analysis</span>
                                <div className="w-12 h-0.5 bg-brand-green"></div>
                            </div>
                            <div className="flex justify-between items-center border-b border-black pb-4">
                                <span className="text-xs font-bold uppercase">Brand Audits</span>
                                <div className="w-12 h-0.5 bg-brand-green"></div>
                            </div>
                            <div className="flex justify-between items-center border-b border-black pb-4">
                                <span className="text-xs font-bold uppercase">Archetype Mapping</span>
                                <div className="w-12 h-0.5 bg-brand-green"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-accent-green-deep p-12 flex flex-col justify-between text-white aspect-square md:aspect-auto group cursor-pointer" data-cursor="VIEW">
                        <div className="text-9xl font-black opacity-10">SX</div>
                        <div>
                            <h4 className="text-2xl font-bold uppercase mb-4 tracking-tight">Crystallize Your Brand</h4>
                            <p className="text-xs font-bold uppercase text-white/60 mb-8 leading-relaxed max-w-xs">
                                Our bespoke branding process is designed for companies that refuse to be ignored.
                            </p>
                            <Link to="/portfolio" className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase text-sm hover:bg-brand-green hover:text-white transition-all inline-block">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branding;
