import { useRef } from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.from(".legal-content", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <div ref={container} className="pt-32 pb-20 px-4 min-h-screen">
            <SEO title="Privacy Policy" description="How we handle your data with architectural integrity." />
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-brand-green transition-colors mb-12">
                    <ArrowLeft size={14} /> Back to Hub
                </Link>

                <div className="legal-content">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-accent-green-mint rounded-full flex items-center justify-center text-brand-green">
                            <ShieldCheck size={24} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Privacy<br /><span className="text-brand-green">Protocol.</span></h1>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-widest text-black/40 mb-12">Last Updated: January 31, 2026</p>

                    <div className="space-y-12">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black pb-2">01. Data Collection</h2>
                            <p className="font-bold uppercase text-xs leading-relaxed text-black/60">
                                We only collect information that you voluntarily provide to us through our contact form. This typically includes your name, email address, and project details. We do not use cookies for tracking or sell your data to third parties.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black pb-2">02. Usage Logic</h2>
                            <p className="font-bold uppercase text-xs leading-relaxed text-black/60">
                                Your data is used exclusively to evaluate your project inquiry and communicate with you. It is stored within our secure Zoho ecosystem and is only accessible by authorized Synthaxx personnel.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black pb-2">03. Security Architecture</h2>
                            <p className="font-bold uppercase text-xs leading-relaxed text-black/60">
                                We implement industry-standard encryption and security protocols to protect your information. While no digital system is 100% impenetrable, we architect our workflows to minimize risk and ensure data integrity.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black pb-2">04. Your Rights</h2>
                            <p className="font-bold uppercase text-xs leading-relaxed text-black/60">
                                You have the right to request deletion of your data at any time. Simply process an inquiry through our contact page with the subject "Data Clearance Request."
                            </p>
                        </section> SECTION
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
