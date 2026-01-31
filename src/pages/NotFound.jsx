import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home, RefreshCcw, Ghost } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const NotFound = () => {
    const container = useRef();

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".nf-title", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "expo.out"
        })
            .from(".nf-img", {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: "back.out(1.7)"
            }, "-=0.5")
            .from(".nf-text", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            }, "-=0.3");

        // Floating animation for the robot
        gsap.to(".nf-img", {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center bg-black text-white overflow-hidden">
            <div className="max-w-4xl w-full text-center relative">
                {/* Background Text Distortion */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
                    <div className="text-[40vw] font-black uppercase tracking-tighter">LOST</div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="nf-title mb-8">
                        <span className="inline-block px-4 py-1 border border-brand-green text-brand-green text-[10px] font-black uppercase tracking-[0.4em] mb-4 rounded-full">
                            ERROR_CODE: 404_VOID_PROTOCOL
                        </span>
                        <h1 className="text-8xl md:text-[150px] font-bold leading-none tracking-tighter uppercase">
                            OOPS<span className="text-brand-green">!</span>
                        </h1>
                    </div>

                    <div className="nf-img w-64 h-64 md:w-80 md:h-80 mb-12 relative">
                        <img
                            src="/404_robot.png"
                            alt="Confused Robot"
                            className="w-full h-full object-contain"
                        />
                        <div className="absolute -top-4 -right-4 bg-brand-green p-3 rounded-full animate-bounce">
                            <Ghost size={24} className="text-white" />
                        </div>
                    </div>

                    <div className="max-w-md mx-auto mb-12">
                        <p className="nf-text text-xl md:text-2xl font-bold uppercase mb-4">
                            You've entered the literal void.
                        </p>
                        <p className="nf-text text-sm font-bold uppercase text-white/40 leading-relaxed">
                            Our architecture is usually solid, but even the best code can't find a page that doesn't exist. Maybe our robot ate it.
                        </p>
                    </div>

                    <div className="nf-text flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/"
                            data-cursor="HOME"
                            className="bg-brand-green text-white px-10 py-5 rounded-full font-bold uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 group"
                        >
                            <Home size={18} /> Emergency Extraction
                        </Link>
                        <button
                            onClick={() => window.location.reload()}
                            data-cursor="RETRY"
                            className="border border-white/20 text-white px-10 py-5 rounded-full font-bold uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
                        >
                            <RefreshCcw size={18} /> Reboot Reality
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
