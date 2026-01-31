import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GlitchText = ({ text, className, delay = 0 }) => {
    const [displayText, setDisplayText] = useState(text);
    const containerRef = useRef(null);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const intervalRef = useRef(null);

    const scramble = () => {
        let iteration = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(
                text.split("")
                    .map((char, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 90%",
                onEnter: () => {
                    setTimeout(scramble, delay * 1000);
                }
            });
        });

        return () => {
            ctx.revert();
            clearInterval(intervalRef.current);
        };
    }, [text, delay]);

    return (
        <span ref={containerRef} className={className}>
            {displayText}
        </span>
    );
};

export default GlitchText;
