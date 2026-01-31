import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const [isMagnetic, setIsMagnetic] = useState(false);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    const activeMagneticItem = useRef(null);

    useEffect(() => {
        const mouseMove = (e) => {
            let targetX = e.clientX;
            let targetY = e.clientY;

            // Magnetic logic
            if (activeMagneticItem.current) {
                const rect = activeMagneticItem.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Calculate distance from center
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;

                // Pull strong toward center
                targetX = centerX + distanceX * 0.3;
                targetY = centerY + distanceY * 0.3;
            }

            cursorX.set(targetX - (isHovering ? 40 : 10));
            cursorY.set(targetY - (isHovering ? 40 : 10));
        };

        window.addEventListener("mousemove", mouseMove);

        const handleHoverStart = (e) => {
            const target = e.target.closest('a, button, .cursor-pointer, [data-magnetic]');
            if (target) {
                setIsHovering(true);

                // Check for magnetic attribute or if it's a primary nav item
                if (target.hasAttribute('data-magnetic') || target.tagName === 'BUTTON' || target.tagName === 'A') {
                    activeMagneticItem.current = target;
                    setIsMagnetic(true);

                    // Add subtle transform to the item itself
                    target.style.transition = "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)";
                    target.addEventListener('mousemove', (me) => {
                        const rect = target.getBoundingClientRect();
                        const x = (me.clientX - rect.left - rect.width / 2) * 0.2;
                        const y = (me.clientY - rect.top - rect.height / 2) * 0.2;
                        target.style.transform = `translate(${x}px, ${y}px)`;
                    });
                }

                if (target.getAttribute('data-cursor')) {
                    setCursorText(target.getAttribute('data-cursor'));
                }
            }
        };

        const handleHoverEnd = (e) => {
            const target = e.target.closest('a, button, .cursor-pointer, [data-magnetic]');
            if (target) {
                target.style.transform = `translate(0px, 0px)`;
                activeMagneticItem.current = null;
                setIsMagnetic(false);
            }
            setIsHovering(false);
            setCursorText("");
        };

        window.addEventListener("mouseover", handleHoverStart);
        window.addEventListener("mouseout", handleHoverEnd);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleHoverStart);
            window.removeEventListener("mouseout", handleHoverEnd);
        };
    }, [cursorX, cursorY, isHovering]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-brand-green rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center overflow-hidden"
            style={{
                x: cursorX,
                y: cursorY,
                width: isHovering ? 80 : 20,
                height: isHovering ? 80 : 20,
                backgroundColor: isMagnetic ? '#ffffff' : 'var(--color-brand-green)'
            }}
        >
            {isHovering && cursorText && (
                <span className="text-[10px] font-black uppercase text-black tracking-tighter text-center leading-none px-2 animate-in fade-in zoom-in duration-300">
                    {cursorText}
                </span>
            )}
        </motion.div>
    );
};

export default CustomCursor;
