import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsFinished(true), 500);
                    setTimeout(() => onComplete(), 1200);
                    return 100;
                }
                // Random jumps for a more "loading" feel
                const diff = Math.random() * 15;
                return Math.min(oldProgress + diff, 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center p-6 sm:p-20"
                >
                    <div className="w-full max-w-[1400px] flex flex-col h-full justify-between py-10">
                        {/* Top: Brand Info */}
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                                <span className="text-brand-green font-bold text-xs tracking-widest">SYNTHAXX_SYSTEMS_INIT</span>
                                <span className="text-white/20 text-[10px] font-mono uppercase tracking-widest">V.1.0.6_BUILD_CORE</span>
                            </div>
                            <div className="text-white/20 text-[10px] font-mono text-right uppercase">
                                ACCRA // GH<br />
                                EST. 2025
                            </div>
                        </div>

                        {/* Middle: Progress Counter */}
                        <div className="flex flex-col items-center">
                            <div className="relative overflow-hidden mb-4">
                                <motion.h1
                                    className="text-white text-[20vw] md:text-[250px] font-black leading-none tracking-tighter"
                                >
                                    {Math.round(progress)}
                                    <span className="text-brand-green">%</span>
                                </motion.h1>
                            </div>
                            <div className="w-full max-w-sm h-[1px] bg-white/10 relative">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-brand-green shadow-[0_0_15px_rgba(0,168,120,0.8)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Bottom: Status Logs */}
                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-brand-green animate-pulse rounded-full" />
                                    <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">INITIALIZING_ARCHITECT_MODULE...</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className={`w-1 h-1 ${progress > 40 ? 'bg-brand-green' : 'bg-white/10'} rounded-full`} />
                                    <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">LOADING_VISUAL_ASSETS...</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className={`w-1 h-1 ${progress > 80 ? 'bg-brand-green' : 'bg-white/10'} rounded-full`} />
                                    <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest">BOOTING_GSAP_ENGINE...</span>
                                </div>
                            </div>
                            <div className="text-brand-green text-[10px] font-black uppercase tracking-tighter">
                                [ SYSTEM_STATUS: {progress < 100 ? 'PREPARING' : 'READY'} ]
                            </div>
                        </div>
                    </div>

                    {/* Background Noise/Grid */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
