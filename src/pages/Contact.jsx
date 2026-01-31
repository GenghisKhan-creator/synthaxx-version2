import { useRef } from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.from(".contact-hero", {
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from(".contact-card", {
            x: 50,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <div ref={container} className="pt-24 md:pt-32 pb-20 px-4 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div className="contact-hero">
                        <h1 className="text-[12vw] md:text-[140px] font-bold leading-[0.8] tracking-tighter uppercase mb-12 md:mb-20">
                            BUILD <br /> <span className="text-brand-green">THE</span> <br /> FUTURE
                        </h1>

                        <div className="space-y-8 md:space-y-12">
                            <div className="flex gap-4 md:gap-6 items-start group" data-cursor="MAIL">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green-deep text-white rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,168,120,0.3)] group-hover:scale-110 transition-transform">
                                    <Mail size={18} className="md:w-5 md:h-5" />
                                </div>
                                <div className="cursor-pointer overflow-hidden">
                                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/40 mb-1 md:mb-2">Email us</h4>
                                    <p className="text-lg md:text-2xl font-bold uppercase border-b border-accent-green-mid inline-block group-hover:text-brand-green transition-colors truncate">contact@synthaxxsolutions.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4 md:gap-6 items-start group" data-cursor="CALL">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green-deep text-white rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,168,120,0.3)] group-hover:scale-110 transition-transform">
                                    <Phone size={18} className="md:w-5 md:h-5" />
                                </div>
                                <div className="cursor-pointer">
                                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/40 mb-1 md:mb-2">Call us</h4>
                                    <p className="text-lg md:text-2xl font-bold uppercase border-b border-accent-green-mid inline-block group-hover:text-brand-green transition-colors">+233 54 905 8268</p>
                                </div>
                            </div>

                            <div className="flex gap-4 md:gap-6 items-start group" data-cursor="MAP">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green-deep text-white rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,168,120,0.3)] group-hover:scale-110 transition-transform">
                                    <MapPin size={18} className="md:w-5 md:h-5" />
                                </div>
                                <div className="cursor-pointer">
                                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black/40 mb-1 md:mb-2">Visit us</h4>
                                    <p className="text-base md:text-xl font-bold uppercase leading-tight group-hover:text-brand-green transition-colors">
                                        Wa, Upper West <br />
                                        District 12, John Street
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-card bg-white border-2 border-black rounded-[32px] md:rounded-[40px] p-8 md:p-12 shadow-[10px_10px_0px_var(--color-accent-green-mid)] md:shadow-[20px_20px_0px_var(--color-accent-green-mid)]">
                        <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid gap-2">
                                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Your Name *</label>
                                <input type="text" className="w-full bg-transparent border-b-2 border-black/10 py-3 md:py-4 focus:border-brand-green outline-none font-bold text-base md:text-lg transition-colors placeholder:text-black/20" placeholder="Type your name here..." />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Email Address *</label>
                                <input type="email" className="w-full bg-transparent border-b-2 border-black/10 py-3 md:py-4 focus:border-brand-green outline-none font-bold text-base md:text-lg transition-colors placeholder:text-black/20" placeholder="Email@example.com" />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Tell us about your project *</label>
                                <textarea rows="3" className="w-full bg-transparent border-b-2 border-black/10 py-3 md:py-4 focus:border-brand-green outline-none font-bold text-base md:text-lg transition-colors resize-none placeholder:text-black/20" placeholder="Software development, branding, or web architecture?"></textarea>
                            </div>

                            <button
                                data-cursor="SEND"
                                className="w-full bg-black text-white py-6 md:py-8 rounded-full font-bold text-lg md:text-xl hover:bg-brand-green transition-all uppercase flex items-center justify-center gap-4 group mt-8 md:mt-12"
                            >
                                Send Message <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
