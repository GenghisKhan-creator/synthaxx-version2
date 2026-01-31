import { useRef } from 'react';
import { TrendingUp, Zap, Globe, Users, Award } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BentoStats = () => {
    const container = useRef();

    useGSAP(() => {
        const stats = gsap.utils.toArray(".stat-value");

        stats.forEach(stat => {
            const targetValue = parseInt(stat.getAttribute("data-value"));
            const suffix = stat.getAttribute("data-suffix") || "";
            const prefix = stat.getAttribute("data-prefix") || "";

            gsap.to(stat, {
                innerText: targetValue,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power2.out",
                scrollTrigger: {
                    trigger: stat,
                    start: "top 90%",
                },
                onUpdate: function () {
                    stat.innerText = prefix + Math.ceil(this.targets()[0].innerText).toLocaleString() + suffix;
                }
            });
        });

        gsap.from(".bento-item", {
            scrollTrigger: {
                trigger: ".bento-grid",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "expo.out"
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-20">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-green mb-4 block">Proof of Concept // Performance Metrics</span>
                    <h2 className="text-[10vw] md:text-[80px] font-bold leading-[0.8] tracking-tighter uppercase">
                        IMPACT BY <br /><span className="text-brand-green">THE NUMBERS.</span>
                    </h2>
                </div>

                <div className="bento-grid grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[700px]">
                    {/* Big Item 1: Revenue */}
                    <div className="bento-item md:col-span-2 md:row-span-2 bg-black text-white p-12 rounded-[40px] flex flex-col justify-between group overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                            <TrendingUp size={200} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-8 border border-brand-green/30">
                                <TrendingUp className="text-brand-green" size={32} />
                            </div>
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-brand-green mb-4">Cumulative Revenue Impact</h3>
                            <div
                                className="stat-value text-7xl md:text-[120px] font-bold tracking-tighter leading-none"
                                data-value="250"
                                data-prefix="$"
                                data-suffix="M+"
                            >
                                $0M+
                            </div>
                        </div>
                        <p className="relative z-10 max-w-sm text-sm font-bold uppercase text-white/40 leading-relaxed">
                            Engineered financial systems that have processed and secured over a quarter-billion dollars in enterprise value.
                        </p>
                    </div>

                    {/* Item 2: Latency */}
                    <div className="bento-item md:col-span-2 bg-accent-green-mint border-2 border-black p-10 rounded-[40px] flex flex-col justify-between group">
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                                <Zap className="text-brand-green" size={24} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-40">System_Efficiency</span>
                        </div>
                        <div>
                            <div
                                className="stat-value text-6xl font-bold tracking-tighter mb-2"
                                data-value="12"
                                data-suffix="ms"
                            >
                                0ms
                            </div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-black/60">Average API Latency</h3>
                        </div>
                    </div>

                    {/* Item 3: Reach */}
                    <div className="bento-item bg-white border-2 border-black p-8 rounded-[40px] flex flex-col justify-between group hover:bg-brand-green hover:border-brand-green transition-all duration-500">
                        <Globe className="group-hover:text-white transition-colors" size={32} />
                        <div>
                            <div
                                className="stat-value text-4xl font-bold tracking-tighter mb-1 group-hover:text-white transition-colors"
                                data-value="50"
                                data-suffix="+"
                            >
                                0+
                            </div>
                            <h3 className="text-[10px] font-black uppercase tracking-tighter text-black/40 group-hover:text-white/60 transition-colors leading-tight">Countries <br />Deployed</h3>
                        </div>
                    </div>

                    {/* Item 4: Users */}
                    <div className="bento-item bg-accent-green-deep text-white p-8 rounded-[40px] flex flex-col justify-between group relative overflow-hidden">
                        <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                            <Users size={120} />
                        </div>
                        <Users className="text-brand-green" size={32} />
                        <div className="relative z-10 font-bold tracking-tighter">
                            <div
                                className="stat-value text-4xl mb-1"
                                data-value="1200000"
                                data-suffix="+"
                            >
                                0+
                            </div>
                            <h3 className="text-[10px] font-black uppercase tracking-tighter text-white/40">Active End Users</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BentoStats;
