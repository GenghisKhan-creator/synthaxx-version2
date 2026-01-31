import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CornerHUD = () => {
    const location = useLocation();
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [scrollPercent, setScrollPercent] = useState(0);
    const [ping, setPing] = useState(24);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
            setPing(prev => Math.max(12, Math.min(48, prev + (Math.random() > 0.5 ? 2 : -2))));
        }, 1000);

        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollPercent(Math.round(scrolled));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const hudClass = "fixed z-[60] font-mono text-[9px] font-black uppercase tracking-[0.2em] text-brand-green mix-blend-difference pointer-events-none p-6";

    return (
        <div className="hidden lg:block">
            {/* Top Left */}
            <div className={`${hudClass} top-0 left-0 flex flex-col gap-1`}>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-green animate-pulse rounded-full"></div>
                    <span>LOC: {location.pathname === '/' ? '/HOME' : location.pathname.toUpperCase()}</span>
                </div>
                <span className="opacity-40">NET_ID: SYNTHAXX_GLOBAL_ENTRY</span>
            </div>

            {/* Top Right */}
            <div className={`${hudClass} top-0 right-0 text-right flex flex-col gap-1`}>
                <span>CORE_CLOCK: {time}</span>
                <span className="opacity-40">LATENCY: {ping}MS // {ping < 30 ? 'OPTIMAL' : 'STABLE'}</span>
            </div>

            {/* Bottom Left */}
            <div className={`${hudClass} bottom-0 left-0 flex flex-col gap-1`}>
                <div className="flex items-center gap-4">
                    <div className="w-32 h-[1px] bg-brand-green/20 relative">
                        <div className="absolute top-0 left-0 h-full bg-brand-green transition-all duration-300" style={{ width: `${scrollPercent}%` }}></div>
                    </div>
                    <span>OS_LOAD: {scrollPercent}%</span>
                </div>
                <span className="opacity-40">THREAD: OXA_8F7_SYS</span>
            </div>

            {/* Bottom Right */}
            <div className={`${hudClass} bottom-0 right-0 text-right flex flex-col gap-1`}>
                <span>TERMINAL: SX_v1.0.8</span>
                <div className="flex items-center justify-end gap-2">
                    <span className="opacity-40">SECURE_TUNNEL: </span>
                    <div className="w-8 h-2 bg-brand-green/10 rounded-sm overflow-hidden flex">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex-1 border-r border-black/20 bg-brand-green animate-[pulse_2s_infinite]" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CornerHUD;
