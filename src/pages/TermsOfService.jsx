import { useRef } from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SEO from '../components/SEO';

const TermsOfService = () => {
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
            <SEO title="Terms of Service" description="The legal framework of our digital partnerships." />
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/40 hover:text-brand-green transition-colors mb-12">
                    <ArrowLeft size={14} /> Back to Hub
                </Link>

                <div className="legal-content">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-accent-green-mint rounded-full flex items-center justify-center text-brand-green">
                            <FileText size={24} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Terms of<br /><span className="text-brand-green">Service.</span></h1>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-widest text-black/40 mb-12">Last Updated: January 31, 2026</p>

                    <div className="space-y-12">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black pb-2">01. Engagement</h2>
                            <p className="font-bold uppercase text-xs leading-relaxed text-black/60">
                                By accessing this site or initiating a project inquiry, you agree to abide by our professional conduct standards. We reserve the right to refuse service for projects that conflict with our ethical frameworks or technical capabilities.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black pb-2">02. IP Architecture</h2>
                            <p className="font-bold uppercase text-xs leading-relaxed text-black/60">
                                All code, designs, and visual assets displayed on this site are the intellectual property of Synthaxx Solutions unless otherwise stated. Unauthorized reproduction of our digital architecture is strictly prohibited.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black pb-2">03. Project Delivery</h2>
                            <p className="font-bold uppercase text-xs leading-relaxed text-black/60">
                                Official project timelines and deliverables are governed by separate master service agreements (MSA) signed upon engagement. This website serves as a portfolio and inquiry hub, not a binding contract for specific outcomes.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black pb-2">04. Liability Logic</h2>
                            <p className="font-bold uppercase text-xs leading-relaxed text-black/60">
                                Synthaxx Solutions is not liable for any indirect, incidental, or consequential damages arising from the use of this website. We build for stability, but the digital frontier is inherently evolving.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
