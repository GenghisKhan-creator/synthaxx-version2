import { motion } from 'framer-motion';

const LogoMarquee = () => {
    const logos = [
        "CULTURAL ARC", "KHARD GLOBAL", "NECESSARY AID", "RURAL HEALTH AID",
        "PAY SWIFT", "GHANABA", "AFRIFOOD", "DEE CONSTRUCTIONS"
    ];

    // Double the logos for seamless looping
    const marqueeLogos = [...logos, ...logos];

    return (
        <section className="py-20 border-y border-black bg-white overflow-hidden">
            <div className="flex flex-col gap-10">
                <div className="px-4 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">
                        TRUSTED BY INDUSTRY DISRUPTORS // 01
                    </span>
                </div>

                <div className="relative flex overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex whitespace-nowrap gap-20 items-center pr-20"
                    >
                        {marqueeLogos.map((logo, index) => (
                            <div key={index} className="flex items-center gap-4 group cursor-default">
                                <div className="w-2 h-2 bg-brand-green rounded-full opacity-20 group-hover:opacity-100 transition-opacity"></div>
                                <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black/10 group-hover:text-black transition-colors duration-500">
                                    {logo}
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
