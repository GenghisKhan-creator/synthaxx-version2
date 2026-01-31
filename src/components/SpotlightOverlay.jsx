import { useState, useEffect } from 'react';

const SpotlightOverlay = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[5] opacity-40 mix-blend-soft-light"
            style={{
                background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 168, 120, 0.15), transparent 80%)`
            }}
        />
    );
};

export default SpotlightOverlay;
