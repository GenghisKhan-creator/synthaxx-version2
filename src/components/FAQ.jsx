import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const faqData = [
    {
        id: "01",
        question: "How does Synthaxx ensure sub-100ms response times?",
        answer: "We utilize a globally distributed edge architecture, high-performance Go-based microservices, and aggressive Redis caching strategies. Every layer is optimized for minimal computational overhead and maximum throughput."
    },
    {
        id: "02",
        question: "Can you integrate with our existing legacy infrastructure?",
        answer: "Yes. Our engineering philosophy is based on zero-disruption integration. We build custom 'Bridge APIs' and transformation layers that allow modern scale to sit atop legacy systems without requiring a full rebuild."
    },
    {
        id: "03",
        question: "What is your approach to AI-driven workflow automation?",
        answer: "We focus on 'Agentic Intelligence'—private, SOC2-compliant LLM instances that handle complex, multi-step business logic autonomously while maintaining human-in-the-loop safety protocols."
    },
    {
        id: "04",
        question: "How long does a typical brand transformation take?",
        answer: "A complete visual and strategic overhaul typically spans 6 to 10 weeks. This includes audit, architectural mapping, visual system development, and final asset delivery across all touchpoints."
    },
    {
        id: "05",
        question: "Do you offer post-deployment maintenance?",
        answer: "Performance never sleeps. We provide 24/7 technical monitoring, security patching, and proactive scaling support through our 'Sustain & Scale' retainer program."
    }
];

const FAQItem = ({ item, isOpen, onClick }) => {
    const contentRef = useRef();
    const iconRef = useRef();

    useGSAP(() => {
        gsap.to(contentRef.current, {
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
            duration: 0.6,
            ease: "power3.inOut"
        });

        gsap.to(iconRef.current, {
            rotate: isOpen ? 45 : 0,
            duration: 0.4,
            ease: "power2.out"
        });
    }, [isOpen]);

    return (
        <div
            className={`border-b border-black py-8 cursor-pointer group transition-colors ${isOpen ? 'bg-white' : 'hover:bg-accent-green-mint/20'}`}
            onClick={onClick}
        >
            <div className="flex justify-between items-center gap-8">
                <div className="flex items-center gap-12">
                    <span className="text-xs font-black text-brand-green tracking-widest">{item.id}</span>
                    <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tighter group-hover:text-brand-green transition-colors">
                        {item.question}
                    </h3>
                </div>
                <div ref={iconRef} className="flex-shrink-0 w-12 h-12 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <Plus size={24} />
                </div>
            </div>
            <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
                <div className="pl-8 md:pl-24 pr-12 pt-8 pb-4">
                    <p className="max-w-2xl text-base md:text-lg font-bold uppercase text-black/40 leading-relaxed italic border-l-4 border-brand-green pl-8">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-32">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                <div className="max-w-xl">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-green mb-6 block">Inquiry_Protocol // FAQ</span>
                    <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8]">
                        COMMON <br /><span className="text-brand-green">PROTOCOL.</span>
                    </h2>
                </div>
                <p className="max-w-xs text-xs font-bold uppercase text-black/40 leading-loose">
                    Detailed telemetry on our operational standards, technical methodologies, and partnership frameworks.
                </p>
            </div>

            <div className="border-t border-black">
                {faqData.map((item, index) => (
                    <FAQItem
                        key={item.id}
                        item={item}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
