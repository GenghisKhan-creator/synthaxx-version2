import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import nexusCoreImg from '../assets/generated/nexus_core.png';
import vividUiImg from '../assets/generated/vivid_ui.png';
import synthaxxV2Img from '../assets/generated/synthaxx_v2.png';
import quantumLedgerImg from '../assets/generated/quantum_ledger.png';

const Portfolio = () => {
    const container = useRef();

    const projects = [
        {
            id: "nexus-core",
            title: "Nexus Core",
            category: "Software Development",
            year: "2025",
            image: nexusCoreImg,
            color: "var(--color-accent-green-light)"
        },
        {
            id: "vivid-ui",
            title: "Vivid UI",
            category: "Web Engineering",
            year: "2024",
            image: vividUiImg,
            color: "var(--color-accent-green-mint)"
        },
        {
            id: "synthaxx-v2",
            title: "Synthaxx V2",
            category: "Visual Identity",
            year: "2026",
            image: synthaxxV2Img,
            color: "var(--color-accent-green-light)"
        },
        {
            id: "quantum-ledger",
            title: "Quantum Ledger",
            category: "Fintech Systems",
            year: "2025",
            image: quantumLedgerImg,
            color: "var(--color-accent-green-mint)"
        }
    ];

    useGSAP(() => {
        ScrollTrigger.refresh();

        gsap.from(".portfolio-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.fromTo(".project-card",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".project-grid",
                    start: "top 80%",
                    once: true
                }
            }
        );

        // Fluid Distortion / Magnetic Parallax on Hover
        const cards = gsap.utils.toArray(".project-card");
        cards.forEach((card) => {
            const img = card.querySelector("img");

            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                gsap.to(img, {
                    x: x * 40,
                    y: y * 40,
                    rotationX: -y * 15,
                    rotationY: x * 15,
                    scale: 1.15,
                    duration: 0.6,
                    ease: "power2.out"
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(img, {
                    x: 0,
                    y: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "power4.out"
                });
            });
        });
    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-20 px-4 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="portfolio-title text-[12vw] md:text-[180px] font-bold leading-[0.7] tracking-tighter uppercase mb-24">
                    WORKS <span className="text-brand-green">®</span>
                </h1>

                <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            to={`/portfolio/${project.id}`}
                            data-cursor="CASE STUDY"
                            className="project-card flex flex-col gap-6 group cursor-pointer perspective-1000"
                        >
                            <div className="relative aspect-[3/4] arch-top overflow-hidden border border-black transition-transform duration-500 group-hover:scale-[0.98] preserve-3d">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-grayscale duration-700" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-black opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 z-10">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                            <div className="flex justify-between items-end border-b border-black pb-4">
                                <div>
                                    <h3 className="text-3xl font-bold uppercase group-hover:text-brand-green transition-colors">{project.title}</h3>
                                    <p className="text-xs font-bold uppercase text-black/40">{project.category}</p>
                                </div>
                                <div className="text-sm font-bold opacity-60">© {project.year}</div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-40 text-center">
                    <div className="inline-block relative">
                        <div className="text-[15vw] font-bold leading-none tracking-tighter uppercase opacity-5">Synthaxx</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Link
                                to="/contact"
                                data-cursor="LET'S GO"
                                className="bg-black text-white px-16 py-8 rounded-full font-bold text-xl hover:bg-brand-green transition-all uppercase inline-block"
                            >
                                Start a Project
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
