import { useParams, Link } from 'react-router-dom';
import { useRef } from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Globe, Cpu, BarChart } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import codeFlowImg from '../assets/code_flow.png';
import uiSystemImg from '../assets/ui_system.png';

const ProjectDetail = () => {
    const { id } = useParams();
    const container = useRef();

    // Mock project data - normally this would come from an API or a shared constant
    const projects = {
        "nexus-core": {
            title: "Nexus Core",
            category: "Software Development",
            year: "2025",
            image: codeFlowImg,
            stats: [
                { label: "Performance", value: "+45%", icon: <Cpu className="text-brand-green" /> },
                { label: "Scale", value: "10M+", icon: <BarChart className="text-brand-green" /> },
                { label: "Uptime", value: "99.9%", icon: <Globe className="text-brand-green" /> }
            ],
            description: "Nexus Core is a high-performance backend infrastructure designed for global data processing. Built with Go and deployed on a distributed mesh, it handles millions of concurrent connections with sub-10ms latency."
        },
        "vivid-ui": {
            title: "Vivid UI",
            category: "Web Engineering",
            year: "2024",
            image: uiSystemImg,
            stats: [
                { label: "Load Time", value: "-60%", icon: <Cpu className="text-brand-green" /> },
                { label: "Conversion", value: "+22%", icon: <BarChart className="text-brand-green" /> },
                { label: "Accessibility", value: "100", icon: <Globe className="text-brand-green" /> }
            ],
            description: "A state-of-the-art design system and component library built for rapid scaling. Vivid UI focuses on accessible interaction patterns and optimized rendering performance."
        },
        "synthaxx-v2": {
            title: "Synthaxx V2",
            category: "Visual Identity",
            year: "2026",
            image: codeFlowImg,
            stats: [
                { label: "Brand Recall", value: "85%", icon: <Cpu className="text-brand-green" /> },
                { label: "Engagement", value: "+40%", icon: <BarChart className="text-brand-green" /> },
                { label: "Assets", value: "500+", icon: <Globe className="text-brand-green" /> }
            ],
            description: "The evolution of the Synthaxx brand. A meticulous visual language balancing technical precision with artistic avant-garde, defining the next era of agency identity."
        }
    };

    const project = projects[id] || projects["nexus-core"];

    useGSAP(() => {
        ScrollTrigger.refresh();

        const tl = gsap.timeline();
        tl.from(".project-hero-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        })
            .from(".project-image-view", {
                scale: 0.9,
                opacity: 0,
                duration: 1.2,
                ease: "expo.out"
            }, "-=0.5");

        gsap.from(".stat-card", {
            scrollTrigger: {
                trigger: ".stats-grid",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-20 px-4 min-h-screen">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Navigation */}
                <div className="flex justify-between items-center mb-16">
                    <Link
                        to="/portfolio"
                        data-cursor="BACK"
                        className="flex items-center gap-2 font-bold uppercase text-xs hover:text-brand-green transition-colors"
                    >
                        <ArrowLeft size={16} /> Portfolio
                    </Link>
                    <div className="text-right">
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-black/40">Project // {id.toUpperCase().replace('-', '_')}</span>
                        <span className="block text-xs font-bold uppercase tracking-widest text-brand-green">EST. {project.year}</span>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
                    <div>
                        <h1 className="project-hero-text text-[10vw] md:text-[120px] font-bold leading-[0.8] tracking-tighter uppercase mb-8">
                            {project.title.split(' ')[0]}<br />
                            <span className="text-brand-green">{project.title.split(' ')[1]}</span>
                        </h1>
                        <p className="project-hero-text text-xl font-bold uppercase text-black/40 max-w-lg leading-tight">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-6 py-3 border border-black rounded-full text-xs font-bold uppercase tracking-widest">
                            {project.category}
                        </div>
                        <div className="px-6 py-3 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            Full Case Study <ArrowUpRight size={14} />
                        </div>
                    </div>
                </div>

                {/* Main Image */}
                <div className="project-image-view aspect-[21/9] w-full border border-black rounded-[40px] overflow-hidden mb-32">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>

                {/* Stats Grid */}
                <div className="stats-grid grid md:grid-cols-3 gap-1 bg-black border border-black rounded-[40px] overflow-hidden mb-32">
                    {project.stats.map((stat, i) => (
                        <div key={i} className="stat-card bg-white p-16 flex flex-col justify-between aspect-square group">
                            <div className="p-4 bg-accent-green-mint rounded-2xl w-fit group-hover:bg-accent-green-deep group-hover:text-white transition-colors duration-500">
                                {stat.icon}
                            </div>
                            <div>
                                <div className="text-xs font-black uppercase tracking-widest text-black/40 mb-2">{stat.label}</div>
                                <div className="text-7xl font-bold tracking-tighter group-hover:text-brand-green transition-colors">{stat.value}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="border border-black rounded-3xl p-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-accent-green-mint">
                    <div className="text-5xl font-bold uppercase tracking-tighter">NEXT PROJECT</div>
                    <Link
                        to="/portfolio"
                        data-cursor="VIEW ALL"
                        className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-brand-green transition-all uppercase group flex items-center gap-4"
                    >
                        Back to gallery <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
