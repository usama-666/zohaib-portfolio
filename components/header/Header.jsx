"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
    // console.log(view);
    const names = [
        "Muhammad Zohaib",
        "Game Developer",
        "UI/UX Designer",
        "3D Designer",
    ];

    const [currentNameIndex, setCurrentNameIndex] = useState(0);

    // Cycle through names with a delay
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    //     }, 2000); // Change name every 2 seconds

    //     return () => clearInterval(interval); // Cleanup on component unmount
    // }, [names.length]);

    return (
        <div className="bg-custom-grad bg-img-grad w-full h-[500px] md:h-[800px]">
            <div className="flex justify-center items-center h-full">
                <div className="">
                    <h1 className="w-2/3 md:w-full text-xl md:text-[80px] font-bold">
                        {/* eslint-disable-next-line */}
                        Hi there! I'm{" "}
                        <span className="fade-in">
                            {names[currentNameIndex]}
                        </span>
                    </h1>

                    <button>Click me </button>
                </div>
            </div>
            {/* Add the fade-in animation using Tailwind CSS */}
            <style jsx>{`
                .fade-in {
                    opacity: 0;
                    animation: fadeIn 1s forwards;
                }
                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Header;
