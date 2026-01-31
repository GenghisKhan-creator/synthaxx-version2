import { motion } from 'framer-motion';

const LogoMarquee = () => {
    const partners = [
        { name: "CULTURAL ARC", logo: "/cultural_arc.png?v=1" },
        { name: "KHARD GLOBAL", logo: "/khard_global.png?v=1" },
        { name: "NECESSARY AID", logo: "/necessary_aid.png?v=1" },
        { name: "RURAL HEALTH AID", logo: "/necessary_aid.png?v=1" },
        { name: "PAY SWIFT", logo: "/pay_swift.png?v=1" },
        { name: "GHANABA", logo: "/cultural_arc.png?v=1" },
        { name: "AFRIFOOD", logo: "/afrifood.png?v=1" },
        { name: "DEE CONSTRUCTIONS", logo: "/dee_constructions.png?v=1" }
    ];

    // Double the partners for seamless looping
    const marqueePartners = [...partners, ...partners];

    return (
        <section className="py-24 border-y border-black bg-white overflow-hidden">
            <div className="flex flex-col gap-12">
                <div className="px-4 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-black/40">
                        TRUSTED BY INDUSTRY DISRUPTORS // COLLABORATION_RECORD
                    </span>
                </div>

                <div className="relative flex overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex whitespace-nowrap gap-24 items-center pr-24"
                    >
                        {marqueePartners.map((partner, index) => (
                            <div key={index} className="flex items-center gap-8 group cursor-default">
                                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-accent-green-mint rounded-full flex items-center justify-center p-3 border border-black/10 overflow-hidden">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-contain group-hover:scale-110 transition-all duration-700 block"
                                        onError={(e) => {
                                            console.error(`FAILED: ${partner.logo}`);
                                            // Fallback to a placeholder if it really fails
                                            e.target.src = "https://via.placeholder.com/80?text=LOGO";
                                        }}
                                        onLoad={() => console.log(`LOADED: ${partner.logo}`)}
                                    />
                                </div>
                                <span className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black/10 group-hover:text-black transition-colors duration-500">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;
