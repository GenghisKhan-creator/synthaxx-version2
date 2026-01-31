import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <>
            {children}

            {/* Transition Bars */}
            <motion.div
                className="fixed inset-0 z-[99999] pointer-events-none flex flex-col"
                initial={{ opacity: 0 }}
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-full bg-black flex-1"
                        initial={{ scaleX: 0 }}
                        animate={{
                            scaleX: [0, 1, 1, 0],
                            originX: [0, 0, 1, 1]
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.87, 0, 0.13, 1],
                            delay: i * 0.05
                        }}
                    />
                ))}
            </motion.div>

            {/* Glitch Overlay */}
            <motion.div
                className="fixed inset-0 z-[99998] bg-brand-green/20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 0.5, 0],
                }}
                transition={{
                    duration: 0.4,
                    delay: 0.4,
                    ease: "easeInOut"
                }}
            />
        </>
    );
};

export default PageTransition;
