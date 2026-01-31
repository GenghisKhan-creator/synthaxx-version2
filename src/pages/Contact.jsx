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
        <div ref={container} className="pt-32 pb-20 px-4 min-h-screen overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="contact-hero">
                        <h1 className="text-[10vw] md:text-[140px] font-bold leading-[0.8] tracking-tighter uppercase mb-20">
                            BUILD <br /> <span className="text-brand-green">THE</span> <br /> FUTURE
                        </h1>

                        <div className="space-y-12">
                            <div className="flex gap-6 items-start group" data-cursor="MAIL">
                                <div className="w-12 h-12 bg-accent-green-deep text-white rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,168,120,0.3)] group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div className="cursor-pointer">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Email us</h4>
                                    <p className="text-2xl font-bold uppercase border-b border-accent-green-mid inline-block group-hover:text-brand-green transition-colors">hello@synthaxx.studio</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group" data-cursor="CALL">
                                <div className="w-12 h-12 bg-accent-green-deep text-white rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,168,120,0.3)] group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <div className="cursor-pointer">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Call us</h4>
                                    <p className="text-2xl font-bold uppercase border-b border-accent-green-mid inline-block group-hover:text-brand-green transition-colors">+1 (555) 0123-4567</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group" data-cursor="MAP">
                                <div className="w-12 h-12 bg-accent-green-deep text-white rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,168,120,0.3)] group-hover:scale-110 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <div className="cursor-pointer">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-2">Visit us</h4>
                                    <p className="text-xl font-bold uppercase leading-tight group-hover:text-brand-green transition-colors">
                                        Silicon Valley, CA <br />
                                        Tech District, Suite 404
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-card bg-white border-2 border-black rounded-[40px] p-12 shadow-[20px_20px_0px_var(--color-accent-green-mid)]">
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest">Your Name *</label>
                                <input type="text" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-brand-green outline-none font-bold text-lg transition-colors" placeholder="Type your name here..." />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest">Email Address *</label>
                                <input type="email" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-brand-green outline-none font-bold text-lg transition-colors" placeholder="Email@example.com" />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest">Tell us about your project *</label>
                                <textarea rows="4" className="w-full bg-transparent border-b-2 border-black/10 py-4 focus:border-brand-green outline-none font-bold text-lg transition-colors resize-none" placeholder="Software development, branding, or web architecture?"></textarea>
                            </div>

                            <button
                                data-cursor="SEND"
                                className="w-full bg-black text-white py-8 rounded-full font-bold text-xl hover:bg-brand-green transition-all uppercase flex items-center justify-center gap-4 group mt-12"
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
