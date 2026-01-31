import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Globe, Lock, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <Zap className="text-brand-primary" />,
        title: 'Lightning Fast',
        description: 'Optimized for speed and performance, ensuring your users never wait.'
    },
    {
        icon: <Globe className="text-brand-primary" />,
        title: 'Global Scale',
        description: 'Deploy anywhere in the world with our edge-ready infrastructure.'
    },
    {
        icon: <Lock className="text-brand-primary" />,
        title: 'Enterprise Security',
        description: 'Baked-in security protocols to keep your data and users safe.'
    },
    {
        icon: <Cpu className="text-brand-primary" />,
        title: 'AI Componentry',
        description: 'Integrate the latest large language models into your workflow seamlessly.'
    }
];

const Features = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-surface-dark/30" id="services">
            <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Powerful <span className="text-gradient">Capabilities</span></h2>
                <p className="text-white/50 max-w-2xl mx-auto">Everything you need to build, scale, and secure your digital future.</p>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card glass p-8 rounded-3xl hover:bg-white/5 transition-colors duration-300 group">
                        <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-primary/20 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
