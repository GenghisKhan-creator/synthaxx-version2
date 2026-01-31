import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CornerHUD = () => {
    const location = useLocation();
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
        }, 1000);

        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollPercent(Math.round(scrolled));
        };

        window.addEventListener('scroll', handleScroll);
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
                    <span>REL_PATH: {location.pathname === '/' ? '/HOME' : location.pathname.toUpperCase()}</span>
                </div>
                <span className="opacity-40">COORD: 37.7749° N, 122.4194° W</span>
            </div>

            {/* Top Right */}
            <div className={`${hudClass} top-0 right-0 text-right flex flex-col gap-1`}>
                <span>CORE_CLOCK: {time}</span>
                <span className="opacity-40">STATUS: SCANNING_ACTIVE...</span>
            </div>

            {/* Bottom Left */}
            <div className={`${hudClass} bottom-0 left-0 flex flex-col gap-1`}>
                <div className="flex items-center gap-4">
                    <div className="w-32 h-[1px] bg-brand-green/20 relative">
                        <div className="absolute top-0 left-0 h-full bg-brand-green" style={{ width: `${scrollPercent}%` }}></div>
                    </div>
                    <span>SYS_LOAD: {scrollPercent}%</span>
                </div>
                <span className="opacity-40">BUFFER: 0x8F2A9C0</span>
            </div>

            {/* Bottom Right */}
            <div className={`${hudClass} bottom-0 right-0 text-right flex flex-col gap-1`}>
                <span>MODULE_ID: SX_v1.0.6</span>
                <span className="opacity-40">ENCRYPTION: AES_256_ACTIVE</span>
            </div>
        </div>
    );
};

export default CornerHUD;
