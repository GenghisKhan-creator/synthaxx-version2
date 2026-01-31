import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const CustomCursor = () => {
    const location = useLocation();
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const [isMagnetic, setIsMagnetic] = useState(false);

    const springConfig = { damping: 30, stiffness: 300 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    const activeMagneticItem = useRef(null);

    // Reset cursor on navigation
    useEffect(() => {
        setIsHovering(false);
        setIsMagnetic(false);
        setCursorText("");
        activeMagneticItem.current = null;
    }, [location]);

    useEffect(() => {
        const mouseMove = (e) => {
            let targetX = e.clientX;
            let targetY = e.clientY;

            if (activeMagneticItem.current) {
                const rect = activeMagneticItem.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;

                targetX = centerX + distanceX * 0.3;
                targetY = centerY + distanceY * 0.3;
            }

            const size = isHovering ? 40 : 10;
            cursorX.set(targetX - size);
            cursorY.set(targetY - size);
        };

        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, [isHovering, cursorX, cursorY]);

    useEffect(() => {
        const handleHoverStart = (e) => {
            const target = e.target.closest('a, button, .cursor-pointer, [data-magnetic], [data-cursor]');
            if (target) {
                setIsHovering(true);

                if (target.hasAttribute('data-magnetic') || target.tagName === 'BUTTON' || target.tagName === 'A') {
                    activeMagneticItem.current = target;
                    setIsMagnetic(true);

                    target.style.transition = "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)";
                    const onMove = (me) => {
                        const rect = target.getBoundingClientRect();
                        const x = (me.clientX - rect.left - rect.width / 2) * 0.2;
                        const y = (me.clientY - rect.top - rect.height / 2) * 0.2;
                        target.style.transform = `translate(${x}px, ${y}px)`;
                    };
                    target.addEventListener('mousemove', onMove);
                    target._onMove = onMove;
                }

                if (target.getAttribute('data-cursor')) {
                    setCursorText(target.getAttribute('data-cursor'));
                }
            }
        };

        const handleHoverEnd = (e) => {
            const target = e.target.closest('a, button, .cursor-pointer, [data-magnetic], [data-cursor]');
            if (target) {
                target.style.transform = `translate(0px, 0px)`;
                if (target._onMove) {
                    target.removeEventListener('mousemove', target._onMove);
                    delete target._onMove;
                }
                activeMagneticItem.current = null;
                setIsMagnetic(false);
            }
            setIsHovering(false);
            setCursorText("");
        };

        window.addEventListener("mouseover", handleHoverStart);
        window.addEventListener("mouseout", handleHoverEnd);

        return () => {
            window.removeEventListener("mouseover", handleHoverStart);
            window.removeEventListener("mouseout", handleHoverEnd);
        };
    }, []);

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
                <span className="text-[10px] font-black uppercase text-black tracking-tighter text-center leading-none px-2">
                    {cursorText}
                </span>
            )}
        </motion.div>
    );
};

export default CustomCursor;
