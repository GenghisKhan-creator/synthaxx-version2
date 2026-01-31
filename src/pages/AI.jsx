import { useRef } from 'react';
import { Brain, Cpu, Database, Network, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import GlitchText from '../components/GlitchText';

const AI = () => {
    const container = useRef();

    const capabilities = [
        {
            title: "Neural Architectures",
            desc: "Custom-trained LLMs and transformer models optimized for proprietary enterprise data sets.",
            icon: <Network className="text-brand-green" size={32} />
        },
        {
            title: "Autonomous Agents",
            desc: "Deploying goal-oriented agentic workflows that handle complex, multi-step business logic without supervision.",
            icon: <Brain className="text-brand-green" size={32} />
        },
        {
            title: "Predictive Analytics",
            desc: "High-velocity data processing engines that forecast market trends and operations with 98% accuracy.",
            icon: <Database className="text-brand-green" size={32} />
        }
    ];

    useGSAP(() => {
        ScrollTrigger.refresh();

        const tl = gsap.timeline();
        tl.from(".ai-hero-text", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "expo.out"
        })
            .from(".ai-visual", {
                scale: 0.8,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out"
            }, "-=1");

        gsap.from(".capability-card", {
            scrollTrigger: {
                trigger: ".capability-grid",
                start: "top 80%",
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen pt-32 pb-20 px-4 bg-black text-white selection:bg-brand-green selection:text-white">
            <SEO
                title="AI & Machine Learning"
                description="Harnessing Neural Logic. We build autonomous AI agents and enterprise-grade predictive models."
            />
            <div className="max-w-[1400px] mx-auto">
                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
                    <div>
                        <span className="ai-hero-text inline-block px-4 py-1 border border-brand-green text-brand-green text-[10px] font-black uppercase tracking-[0.4em] mb-8 rounded-full">
                            INTEL_MODULE_v4.0
                        </span>
                        <h1 className="ai-hero-text text-[12vw] md:text-[120px] font-bold leading-[0.85] tracking-tighter uppercase mb-10 transition-transform duration-75">
                            <GlitchText text="NEURAL" /> <br /> <span className="text-brand-green"><GlitchText text="LOGIC." delay={0.2} /></span>
                        </h1>
                        <p className="ai-hero-text text-xl md:text-2xl font-medium uppercase text-white/40 max-w-lg leading-tight mb-12">
                            Synthaxx builds autonomous intelligence that doesn't just process data—it reasons with it.
                        </p>
                        <div className="ai-hero-text flex flex-wrap gap-6">
                            <Link to="/contact" className="bg-brand-green text-white px-10 py-5 rounded-full font-bold uppercase hover:bg-white hover:text-black transition-all group flex items-center gap-4">
                                Connect Agent <Zap size={20} className="fill-current" />
                            </Link>
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
                                <ShieldCheck className="text-brand-green" />
                                SOC2_TYPE_II_COMPLIANT
                            </div>
                        </div>
                    </div>

                    <div className="ai-visual relative aspect-square border border-white/10 rounded-[60px] overflow-hidden bg-white/5 flex items-center justify-center group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,168,120,0.15)_0%,transparent_70%)]" />
                        <div className="relative z-10 w-2/3 h-2/3 border border-brand-green/30 rounded-full animate-[ping_3s_infinite] flex items-center justify-center">
                            <div className="w-1/2 h-1/2 border border-brand-green/60 rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
                                <Cpu size={80} className="text-brand-green group-hover:scale-125 transition-transform duration-700" />
                            </div>
                        </div>
                        {/* Technical Coordinates Overlay */}
                        <div className="absolute top-10 left-10 font-mono text-[8px] opacity-20 space-y-1">
                            <div>SCANNING: NODE_029</div>
                            <div>PKT_LOSS: 0.00%</div>
                            <div>THROUGHPUT: 4.2GB/S</div>
                        </div>
                    </div>
                </div>

                {/* Capabilities Grid */}
                <div className="capability-grid grid md:grid-cols-3 gap-1 bg-white/10 border border-white/10 rounded-[40px] overflow-hidden">
                    {capabilities.map((cap, i) => (
                        <div key={i} className="capability-card bg-black p-12 md:p-16 flex flex-col justify-between aspect-square group hover:bg-brand-green/5 transition-colors duration-500">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                                {cap.icon}
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">{cap.title}</h3>
                                <p className="text-sm font-bold uppercase text-white/40 leading-relaxed group-hover:text-white/80 transition-colors">
                                    {cap.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Technical Section */}
                <div className="mt-40 pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-20">
                    <div className="max-w-md">
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] text-brand-green mb-6">THE_PROCESS // SYNTHESIS</h4>
                        <p className="text-[10px] font-bold uppercase text-white/20 leading-loose">
                            WE INTEGRATE DIRECTLY INTO YOUR CLOUD INFRASTRUCTURE (AWS/GCP/AZURE), DEPLOYING PRIVATE INSTANCES OF STATE-OF-THE-ART LLMS. NO DATA LEAVES YOUR SECURITY PERIMETER. IT IS AI BUILT FOR THE ARCHITECTURAL RIGOR OF ENTERPRISE LEADERS.
                        </p>
                    </div>
                    <div className="flex-1 w-full flex flex-col gap-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 group cursor-pointer hover:border-brand-green transition-colors">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-brand-green transition-colors">0{i + 1}_INFRA_AUDIT</span>
                                <ArrowRight size={14} className="text-white/20 group-hover:text-brand-green group-hover:translate-x-2 transition-all" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AI;
