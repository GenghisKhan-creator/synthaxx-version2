import { useRef, useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';

const Contact = () => {
    const container = useRef();
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        const formData = new FormData(form.current);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const message = formData.get('message');
        const honeypot = formData.get('work_email'); // Honeypot field

        // Bot Detection
        if (honeypot) {
            console.warn("Bot detected. Submission ignored.");
            // We simulate success to confuse the bot without wasting resources
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success("Message sent successfully!");
            form.current.reset();
            return;
        }

        if (!name || !email || !message) {
            toast.error("Please fill in all required fields!");
            return;
        }

        setIsSubmitting(true);
        const loadingToast = toast.loading("Sending your message...");

        try {
            // Replace these with your actual EmailJS IDs
            // You can get them at https://dashboard.emailjs.com/
            const SERVICE_ID = 'service_default'; // Default service ID
            const TEMPLATE_ID = 'template_contact_form'; // Replace with your template ID
            const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your public key

            if (PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
                // If keys aren't set, we'll simulate a success for now but warn the user
                console.warn("EmailJS keys not set. Please set your SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY in Contact.jsx");
                await new Promise(resolve => setTimeout(resolve, 2000));
                toast.success("Message sent! (Simulated - Setup Keys to live)", { id: loadingToast });
                form.current.reset();
            } else {
                await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
                toast.success("Message sent successfully! We'll get back to you soon.", { id: loadingToast });
                form.current.reset();
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Failed to send message. Please try again later.", { id: loadingToast });
        } finally {
            setIsSubmitting(false);
        }
    };

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
        <div ref={container} className="pt-24 md:pt-32 pb-20 px-4 md:px-6 min-h-screen">
            <SEO
                title="Get In Touch"
                description="Ready to build the future? Contact Synthaxx Solutions for premium software, web, and branding projects."
            />
            <div className="max-w-[1400px] mx-auto overflow-hidden">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div className="contact-hero w-full overflow-hidden">
                        <h1 className="text-[15vw] sm:text-[10vw] md:text-[140px] font-bold leading-[0.8] tracking-tighter uppercase mb-8 md:mb-20 break-words">
                            BUILD <br /> <span className="text-brand-green">THE</span> <br /> FUTURE
                        </h1>

                        <div className="space-y-6 md:space-y-12">
                            <div className="flex gap-4 items-start group min-w-0" data-cursor="MAIL">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green-deep text-white rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,168,120,0.3)]">
                                    <Mail size={18} />
                                </div>
                                <div className="cursor-pointer min-w-0 flex-1">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Email us</h4>
                                    <p className="text-base sm:text-lg md:text-2xl font-bold uppercase border-b border-accent-green-mid inline-block break-all">contact@synthaxxsolutions.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group" data-cursor="CALL">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green-deep text-white rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,168,120,0.3)]">
                                    <Phone size={18} />
                                </div>
                                <div className="cursor-pointer">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Call us</h4>
                                    <p className="text-base sm:text-lg md:text-2xl font-bold uppercase border-b border-accent-green-mid inline-block">+233 54 905 8268</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group" data-cursor="MAP">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent-green-deep text-white rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,168,120,0.3)]">
                                    <MapPin size={18} />
                                </div>
                                <div className="cursor-pointer">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-1">Visit us</h4>
                                    <p className="text-sm sm:text-base md:text-xl font-bold uppercase leading-tight">
                                        Wa, Upper West <br />
                                        District 12, John Street
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-card w-full max-w-full overflow-hidden bg-white border-2 border-black rounded-[24px] md:rounded-[40px] p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_var(--color-accent-green-mid)] md:shadow-[20px_20px_0px_var(--color-accent-green-mid)]">
                        <form ref={form} className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                            <div className="grid gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest">Your Name *</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="w-full bg-transparent border-b-2 border-black/10 py-3 md:py-4 focus:border-brand-green outline-none font-bold text-base md:text-lg transition-colors placeholder:text-black/20"
                                    placeholder="Name..."
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest">Email Address *</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    className="w-full bg-transparent border-b-2 border-black/10 py-3 md:py-4 focus:border-brand-green outline-none font-bold text-base md:text-lg transition-colors placeholder:text-black/20"
                                    placeholder="Email@example.com"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest">About your project *</label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    className="w-full bg-transparent border-b-2 border-black/10 py-3 md:py-4 focus:border-brand-green outline-none font-bold text-base md:text-lg transition-colors resize-none placeholder:text-black/20"
                                    placeholder="Message..."
                                    required
                                ></textarea>
                            </div>

                            {/* Honeypot Field - Hidden from humans but filled by bots */}
                            <div className="hidden" aria-hidden="true">
                                <label>Work Email (Ignore this if you are human)</label>
                                <input type="text" name="work_email" tabIndex="-1" autoComplete="off" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                data-cursor="SEND"
                                className={`w-full bg-black text-white py-5 md:py-8 rounded-full font-bold text-lg md:text-xl hover:bg-brand-green transition-all uppercase flex items-center justify-center gap-4 group mt-4 md:mt-12 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>Sending... <Loader2 className="animate-spin" /></>
                                ) : (
                                    <>Send Message <ArrowRight className="group-hover:translate-x-2 transition-transform" /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
