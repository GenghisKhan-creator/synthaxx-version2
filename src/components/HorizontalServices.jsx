import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code, Palette, Globe } from 'lucide-react';

const HorizontalServices = () => {
    const sectionRef = useRef();
    const triggerRef = useRef();

    const services = [
        {
            title: "Software Engineering",
            desc: "Complex backend architectures and scalable SaaS platforms built with high-performance logic.",
            icon: <Code size={60} />,
            path: "/software",
            color: "bg-accent-green-mint"
        },
        {
            title: "Brand Identity",
            desc: "Minimalist, authoritative visual systems that define the next generation of enterprise leaders.",
            icon: <Palette size={60} />,
            path: "/branding",
            color: "bg-white"
        },
        {
            title: "Web Architecture",
            desc: "State-of-the-art web applications that balance rigorous engineering with avant-garde design.",
            icon: <Globe size={60} />,
            path: "/expertise",
            color: "bg-accent-green-light"
        }
    ];

    useGSAP(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: "-200vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                    anticipatePin: 1,
                },
            }
        );
        return () => pin.kill();
    }, { scope: triggerRef });

    return (
        <section className="overflow-hidden bg-black">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="h-screen w-[300vw] flex flex-row relative">
                    {/* Intro Slide */}
                    <div className="h-screen w-screen flex flex-col justify-center px-6 md:px-20 bg-black text-white shrink-0">
                        <span className="text-brand-green font-bold text-xs tracking-[0.4em] mb-8 uppercase">Core_Capabilities // 02</span>
                        <h2 className="text-[15vw] md:text-[180px] font-bold leading-[0.7] tracking-tighter uppercase mb-10">
                            CORE <br /> <span className="text-brand-green">SYSTEMS</span>
                        </h2>
                        <div className="flex items-center gap-10">
                            <div className="w-20 h-[1px] bg-white/20"></div>
                            <p className="max-w-xs text-sm font-bold uppercase text-white/40">
                                SCROLL TO EXPLORE THE THREE PILLARS OF SYNTHAXX ARCHITECTURE.
                            </p>
                        </div>
                    </div>

                    {/* Service Slides */}
                    {services.map((service, i) => (
                        <div key={i} className={`h-screen w-screen shrink-0 ${service.color} p-6 md:p-20 flex flex-col justify-between border-l border-black relative group`}>
                            <div className="flex justify-between items-start relative z-10">
                                <span className="text-8xl font-black opacity-10">0{i + 1}</span>
                                <div className="p-8 border border-black rounded-full bg-white text-brand-green shadow-[10px_10px_0px_rgba(0,0,0,1)] transition-transform group-hover:scale-110">
                                    {service.icon}
                                </div>
                            </div>

                            <div className="max-w-4xl relative z-10">
                                <h3 className="text-[8vw] md:text-[80px] font-bold uppercase tracking-tighter leading-none mb-10">
                                    {service.title}
                                </h3>
                                <p className="text-xl md:text-3xl font-medium uppercase text-black/60 mb-12 max-w-2xl leading-tight">
                                    {service.desc}
                                </p>
                                <Link
                                    to={service.path}
                                    data-cursor="LEARN MORE"
                                    className="inline-flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-bold uppercase transition-all hover:bg-brand-green group border border-black shadow-[5px_5px_0px_rgba(0,0,0,0.2)] active:shadow-none"
                                >
                                    View Specialty <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>

                            <div className="flex justify-between items-end relative z-10">
                                <div className="text-[10px] font-black uppercase tracking-widest text-black/20">
                                    SYNTHAXX_V.1 // PILLAR_0{i + 1}
                                </div>
                                <div className="text-sm font-bold opacity-40">© 2026</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HorizontalServices;
