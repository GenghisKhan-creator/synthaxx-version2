import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Box, Sun, Zap, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Process = () => {
    const container = useRef();

    const steps = [
        {
            num: "01",
            title: "ARCHITECT",
            subtitle: "Infrastructure Discovery",
            desc: "We dive deep into your logic, mapping out every API endpoint and backend requirement before a single line of UI is designed.",
            icon: <Box size={32} className="text-brand-green" />,
            color: "bg-white"
        },
        {
            num: "02",
            title: "CRYSTALLIZE",
            subtitle: "Visual Language",
            desc: "Your brand architecture is solidified into a high-fidelity design system that communicates authority and innovation.",
            icon: <Sun size={32} className="text-brand-green" />,
            color: "bg-accent-green-mint"
        },
        {
            num: "03",
            title: "EXECUTE",
            subtitle: "Rigorous Deployment",
            desc: "The final product is shipped using high-performance codebases and bulletproof CI/CD pipelines. No compromise on speed.",
            icon: <Zap size={32} className="text-brand-green" />,
            color: "bg-black text-white"
        }
    ];

    useGSAP(() => {
        gsap.from(".process-card", {
            scrollTrigger: {
                trigger: ".process-grid",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <section ref={container} data-theme="dark" className="py-32 px-4 bg-white transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-4 block">
                            HOW WE WORK // OUR SYNTHESIS
                        </span>
                        <h2 className="text-[12vw] md:text-[80px] font-bold leading-[0.9] tracking-tighter uppercase">
                            FROM LOGIC <br /> TO <span className="text-brand-green">LEGACY.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm font-bold uppercase text-black/40 leading-relaxed text-right">
                        A clinical methodology for building products that stand the test of time and scale.
                    </p>
                </div>

                <div className="process-grid grid lg:grid-cols-3 gap-0 border border-black overflow-hidden rounded-[40px]">
                    {steps.map((step, i) => (
                        <div key={i} className={`process-card p-12 md:p-16 flex flex-col justify-between aspect-square md:aspect-auto min-h-[500px] border-b lg:border-b-0 lg:border-r last:border-0 border-black ${step.color} relative group overflow-hidden`}>
                            {/* Hover effect background */}
                            <div className="absolute inset-0 bg-brand-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />

                            <div className="relative z-10 flex justify-between items-start">
                                <span className="text-6xl font-black tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">{step.num}</span>
                                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-black/5 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-2 opacity-50">{step.subtitle}</h4>
                                <h3 className="text-5xl font-bold uppercase tracking-tighter mb-6">{step.title}</h3>
                                <p className="text-sm font-bold uppercase leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                                    {step.desc}
                                </p>
                                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <CheckCircle2 size={12} className="text-brand-green" />
                                    PHASE_{step.num}_COMPLETED
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
