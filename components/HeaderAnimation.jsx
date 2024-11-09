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
        <div className="w-[80%]">
            <div className="flex flex-col  md:flex-row">
                <h1 className="text-3xl  sm:text-4xl md:text-[65px] font-bold tracking-tighter md:leading-[4rem] w ">
                    Hi there! I'm{"   "}
                </h1>
                <div className="md:ml-5 flex  space-x-1 justify-start w-full md:w-2/3">
                    <AnimatePresence mode="wait">
                        {names[currentNameIndex].split("").map((char, i) => (
                            <motion.p
                                ref={ref}
                                key={`${currentNameIndex}-${i}`} // Unique key for each character
                                initial={{ opacity: 0, x: -18 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                exit={{ opacity: 0, x: 18 }} // Animate exit with fade and slide
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-3xl text-center  font-bold  sm:text-4xl md:text-[65px]  tracking-tighter md:leading-[4rem]"
                            >
                                {char === " " ? <span>&nbsp;</span> : char}
                            </motion.p>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default HeaderAnimation;
