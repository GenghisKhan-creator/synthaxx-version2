import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Stats = () => {
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.stat-item', {
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: 'top 85%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out'
            });
        }, statsRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={statsRef} className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 border-y border-white/5 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: 'Cloud Infrastructure', value: '100%' },
                        { label: 'Response Time', value: '<20ms' },
                        { label: 'Client Retention', value: '99.9%' },
                        { label: 'Global Reaches', value: '150+' },
                    ].map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="text-3xl md:text-5xl font-bold mb-2 text-gradient">{stat.value}</div>
                            <div className="text-xs md:text-sm font-medium tracking-widest text-white/40 uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
