"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import React, { useState, useEffect } from "react";

const HeaderAnimation = () => {
    const names = [
        "Muhammad Zohaib",
        "Unity Game Dev",
        "Level Designer",
        "UI/UX Designer",
    ];
    const [currentNameIndex, setCurrentNameIndex] = useState(0);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    // Cycle through names with a delay
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, 4000); // Change name every 2 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [names.length]);

    return (
        <div className="w-[80%] ">
            <div className="flex flex-col items-center justify-center text-center  lg:flex-row py-5 w-full">
                <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center ">
                    <h1 className="text-3xl sm:text-4xl md:text-[60px] font-serif font-bold md:leading-[4rem] text-center">
                        Hi there! I'm{" "}
                    </h1>
                    <div className="lg:ml-5 flex items-center text-center space-x-1 font-serif ">
                        <AnimatePresence mode="wait">
                            {names[currentNameIndex]
                                .split("")
                                .map((char, i) => (
                                    <motion.p
                                        ref={ref}
                                        key={`${currentNameIndex}-${i}`}
                                        initial={{ opacity: 0, x: -18 }}
                                        animate={
                                            isInView ? { opacity: 1, x: 0 } : {}
                                        }
                                        exit={{ opacity: 0, x: 18 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: i * 0.1,
                                        }}
                                        className="text-3xl font-bold sm:text-4xl md:text-[65px] lg:text-[75px] tracking-tighter md:leading-[4rem] text-center"
                                    >
                                        {char === " " ? (
                                            <span>&nbsp;</span>
                                        ) : (
                                            char
                                        )}
                                    </motion.p>
                                ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderAnimation;
