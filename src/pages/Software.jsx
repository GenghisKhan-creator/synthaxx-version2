import { useRef } from 'react';
import { ArrowRight, Code, Database, Cloud, Terminal, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Software = () => {
    const container = useRef();

    const modules = [
        {
            title: "SaaS Architecture",
            desc: "Multi-tenant systems built for 99.99% uptime and horizontal scalability.",
            icon: <Cloud className="text-brand-green" />
        },
        {
            title: "Backend Engineering",
            desc: "Robust Node, Go, and Python engines processing millions of events per second.",
            icon: <Database className="text-brand-green" />
        },
        {
            title: "API Ecosystems",
            desc: "Clean, documented, and secure integration layers for internal and external consumers.",
            icon: <Terminal className="text-brand-green" />
        },
        {
            title: "Security & DevSecOps",
            desc: "Compliance-driven workflows with automated vulnerability scanning and firewalls.",
            icon: <Shield className="text-brand-green" />
        }
    ];

    useGSAP(() => {
        ScrollTrigger.refresh();

        const tl = gsap.timeline();
        tl.from(".soft-hero-line", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });

        gsap.from(".soft-card", {
            scrollTrigger: {
                trigger: ".soft-grid",
                start: "top 80%",
            },
            x: -30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <div ref={container} className="pt-24 md:pt-32 pb-20 px-4 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-40">
                    <div>
                        <div className="mb-8 md:mb-12 overflow-hidden">
                            <h1 className="soft-hero-line text-[12vw] md:text-[120px] font-bold leading-[0.8] tracking-tighter uppercase mb-6 md:mb-8">
                                HIGH <span className="text-brand-green">SCALE</span><br />SYSTEMS
                            </h1>
                            <p className="soft-hero-line text-base md:text-lg font-bold uppercase text-black/40 max-w-lg leading-tight">
                                We build the invisible engines that power the world's most demanding digital experiences. No fluff, just performance.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/expertise" data-cursor="BUILD" className="bg-black text-white px-8 py-5 rounded-full font-bold uppercase text-sm hover:bg-brand-green transition-colors inline-block text-center">
                                Technical Specs
                            </Link>
                            <div className="flex items-center gap-2 px-6 py-4 sm:py-0 border border-black rounded-full font-bold text-[10px] uppercase tracking-widest justify-center">
                                <Activity size={14} className="text-brand-green animate-pulse" /> Live Deployment Status
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-auto md:aspect-square bg-accent-green-mint rounded-[32px] md:rounded-[40px] border border-black p-8 md:p-16 flex flex-col justify-center gap-8 overflow-hidden group min-h-[300px]">
                        <div className="absolute top-0 right-0 p-4 md:p-8">
                            <div className="text-[60px] md:text-[120px] font-bold text-black/5 leading-none select-none group-hover:text-brand-green/10 transition-colors tracking-tighter">0101</div>
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="w-12 md:w-16 h-1 bg-black"></div>
                            <div className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">PERFORMANCE<br />FIRST.</div>
                            <p className="max-w-xs font-bold uppercase text-[10px] md:text-xs text-black/60 leading-relaxed">
                                Latency is our enemy. Every millisecond of delay is a loss of revenue. Our architecture is optimized for sub-100ms response times.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="soft-grid grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-black border border-black mb-24 md:mb-40">
                    {modules.map((mod, i) => (
                        <div key={i} className="soft-card bg-white p-8 md:p-10 flex flex-col justify-between aspect-square group hover:bg-black hover:text-white transition-all cursor-pointer" data-cursor="STACK">
                            <div className="w-10 h-10 md:w-12 md:h-12 border border-black group-hover:border-brand-green rounded-full flex items-center justify-center transition-colors">
                                {mod.icon}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4 tracking-tight">{mod.title}</h3>
                                <p className="text-[10px] md:text-xs font-bold uppercase text-black/40 group-hover:text-accent-green-light leading-relaxed">
                                    {mod.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-accent-green-deep rounded-[40px] md:rounded-[60px] p-10 md:p-24 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                        <div className="text-[30vw] font-black uppercase tracking-tighter">CODE</div>
                    </div>
                    <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter mb-8 md:mb-12 relative z-10">
                        LET'S SHIP <br /> <span className="text-brand-green">YOUR</span> FUTURE.
                    </h2>
                    <Link to="/contact" data-cursor="COMMIT" className="w-full sm:w-auto bg-white text-black px-10 md:px-16 py-6 md:py-8 rounded-full font-bold text-lg md:text-xl uppercase hover:bg-brand-green hover:text-white transition-all relative z-10 flex items-center justify-center gap-4 mx-auto">
                        START BUILDING <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Software;
