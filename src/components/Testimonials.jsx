import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Quote, Star, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Alexander Wright",
        role: "CTO, NexaCorp",
        content: "Synthaxx transformed our legacy architecture into a high-performance engine. Their precision in software development is unmatched in the industry today.",
        avatar: "AW"
    },
    {
        name: "Elena Rodriguez",
        role: "Founder, Bloom Digital",
        content: "The branding identity they created for us wasn't just a logo; it was a soul. We've seen a 40% increase in user engagement since the relaunch.",
        avatar: "ER"
    },
    {
        name: "Marcus Thorne",
        role: "Product Lead, Quantum Labs",
        content: "Integrating AI into our workflow seemed daunting until Synthaxx stepped in. They made the complex simple and the impossible achievable.",
        avatar: "MT"
    },
    {
        name: "Sarah Chen",
        role: "Director, Innovate Tech",
        content: "Their attention to detail and commitment to quality is evident in every line of code. They are not just developers; they are architects of the future.",
        avatar: "SC"
    }
];

const Testimonials = ({ isPage = false }) => {
    const container = useRef();
    const bgTextRef = useRef();
    const gridRef = useRef();

    useGSAP(() => {
        // Ensure ScrollTrigger is fresh
        ScrollTrigger.refresh();

        // Parallax background text
        gsap.to(bgTextRef.current, {
            x: -400, // Increased for more visible effect
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // Testimonial Grid Entrance
        const cards = gsap.utils.toArray(".testimonial-card");
        gsap.fromTo(cards,
            {
                y: 100,
                opacity: 0,
                rotateX: -15,
                scale: 0.9
            },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                scale: 1,
                duration: 1.2,
                stagger: {
                    amount: 0.4,
                    from: "start"
                },
                ease: "power4.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                    onComplete: () => {
                        gsap.set(cards, { clearProps: "rotateX,scale,y" });
                    }
                }
            }
        );

        // Magnetic Hover Effect
        cards.forEach(card => {
            const handleMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (centerY - y) / 10; // Reversed for natural tilt
                const rotateY = (x - centerX) / 10;

                gsap.to(card, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    scale: 1.05,
                    duration: 0.4,
                    ease: "power2.out",
                    zIndex: 20,
                    overwrite: "auto"
                });
            };

            const handleLeave = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)",
                    zIndex: 1,
                    overwrite: "auto"
                });
            };

            card.addEventListener("mousemove", handleMove);
            card.addEventListener("mouseleave", handleLeave);
        });
    }, { scope: container });

    return (
        <section ref={container} className={`${isPage ? 'pt-40 pb-20' : 'py-32'} px-6 overflow-hidden bg-white relative`}>
            {/* Background Decorative Text */}
            <div
                ref={bgTextRef}
                className="absolute top-1/2 left-0 -translate-y-1/2 text-[40vw] font-black text-black/[0.03] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter"
            >
                TESTIMONIALS • REPUTATION • TRUST • EXCELLENCE •
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="w-12 h-[1px] bg-brand-green"></div>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green">Global Reputation</span>
                        </div>
                        <h2 className="text-[14vw] sm:text-[10vw] md:text-[110px] font-bold leading-[0.8] tracking-tighter uppercase mb-6 md:mb-8">
                            CLIENT <span className="text-brand-green">VOICES</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-2xl font-bold uppercase text-black/40 max-w-xl leading-snug">
                            We don't just build products; we build long-term partnerships rooted in technical excellence.
                        </p>
                    </div>

                    {!isPage && (
                        <Link
                            to="/testimonials"
                            className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest hover:text-brand-green transition-all border-b-2 border-black pb-2 mb-4"
                        >
                            View All Stories <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    )}
                </div>

                <div ref={gridRef} className="testimonial-grid grid md:grid-cols-2 gap-6 md:gap-10 perspective-1000">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="testimonial-card opacity-0 group p-6 sm:p-10 md:p-14 border-2 border-black rounded-[32px] md:rounded-[48px] bg-white hover:bg-black hover:text-white flex flex-col justify-between shadow-[10px_10px_0px_rgba(0,0,0,0.05)] md:shadow-[20px_20px_0px_rgba(0,0,0,0.05)]"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-16">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-full bg-accent-green-light flex items-center justify-center text-accent-green-deep font-bold text-xl group-hover:bg-brand-green group-hover:text-white transition-colors border border-black/5 ring-4 ring-transparent group-hover:ring-brand-green/20">
                                            {t.avatar}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold uppercase leading-tight">{t.name}</h4>
                                            <p className="text-xs font-bold uppercase text-black/40 group-hover:text-brand-green">{t.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 text-brand-green">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                </div>
                                <div className="relative">
                                    <Quote className="absolute -top-6 md:-top-10 -left-2 md:-left-4 opacity-[0.03] text-brand-green group-hover:opacity-10 transition-opacity" size={60} />
                                    <p className="text-lg sm:text-xl md:text-3xl font-bold leading-tight mb-8 md:mb-10 relative z-10 italic">
                                        "{t.content}"
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end pt-10 border-t border-black/5 group-hover:border-white/10">
                                <span className="text-xs font-black uppercase tracking-[0.2em] opacity-20 group-hover:opacity-40">Verified_Partner // 2026</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
