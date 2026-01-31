import { useRef } from 'react';
import { ArrowUpRight, Code, Palette, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FAQ from '../components/FAQ';

const Expertise = () => {
    const container = useRef();

    const services = [
        {
            id: '01',
            title: 'Software Development',
            description: 'Custom enterprise solutions, SaaS platforms, and robust backend architectures designed for hyper-growth.',
            icon: <Code size={40} />
        },
        {
            id: '02',
            title: 'Web Engineering',
            description: 'High-performance, accessible, and SEO-optimized web applications built with the latest modern frameworks.',
            icon: <Globe size={40} />
        },
        {
            id: '03',
            title: 'Brand Identity',
            description: 'Crystallizing your brand story through meticulous visual systems, typography, and motion design.',
            icon: <Palette size={40} />
        },
        {
            id: '04',
            title: 'AI Integration',
            description: 'Leveraging large language models and machine learning to automate workflows and enhance user experiences.',
            icon: <Cpu size={40} />
        }
    ];

    useGSAP(() => {
        // Clear any existing ScrollTriggers to prevent duplicates on hot-reload
        ScrollTrigger.refresh();

        gsap.from(".expertise-title", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "expo.out"
        });

        gsap.fromTo(".service-card",
            {
                y: 50,
                opacity: 0,
                scale: 0.95
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".service-grid",
                    start: "top 85%",
                    once: true
                }
            }
        );
    }, { scope: container });

    return (
        <div ref={container} className="pt-24 md:pt-32 pb-20 px-4 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-3xl expertise-title">
                        <h1 className="text-[12vw] md:text-[120px] font-bold leading-[0.8] tracking-tighter uppercase mb-6 md:mb-8">
                            OUR <span className="text-brand-green">CORE</span><br />EXPERTISE
                        </h1>
                        <p className="text-base md:text-xl font-medium max-w-xl text-black/60 uppercase">
                            We operate at the intersection of rigorous engineering and avant-garde design.
                        </p>
                    </div>
                    <div className="hidden md:flex w-32 h-32 border border-black border-dashed rounded-full items-center justify-center animate-[spin_15s_linear_infinite]">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-green">SYNTHAXX • SOLUTIONS •</div>
                    </div>
                </div>

                <div className="service-grid grid md:grid-cols-2 gap-1 px-1 bg-accent-green-deep border border-black mb-12 md:mb-20">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            data-cursor="OFFER"
                            className="service-card bg-white p-8 md:p-12 flex flex-col justify-between aspect-auto min-h-[300px] md:aspect-square group hover:bg-accent-green-deep hover:text-white transition-all duration-500 cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-8 md:mb-0">
                                <span className="text-xl md:text-2xl font-bold group-hover:text-brand-green">{service.id}</span>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight size={32} />
                                </div>
                            </div>
                            <div>
                                <div className="mb-4 md:mb-6 opacity-80 group-hover:opacity-100 transition-opacity text-brand-green group-hover:text-accent-green-light">
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">{service.title}</h3>
                                <p className="max-w-sm text-xs md:text-sm font-bold uppercase leading-relaxed text-black/40 group-hover:text-accent-green-light/60">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <FAQ />

                <div className="border border-black rounded-[32px] md:rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 bg-accent-green-mint">
                    <div className="text-4xl md:text-6xl font-bold text-center md:text-left tracking-tighter uppercase">READY TO<br className="hidden md:block" /> SCALE?</div>
                    <Link
                        to="/contact"
                        data-cursor="GO"
                        className="w-full md:w-auto bg-black text-white px-8 md:px-12 py-5 md:py-6 rounded-full font-bold text-base md:text-lg hover:bg-brand-green transition-all uppercase group flex items-center justify-center gap-4"
                    >
                        Start a project <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
