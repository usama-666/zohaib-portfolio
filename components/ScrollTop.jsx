"use client";
import { ArrowUp } from "lucide-react";
import React from "react";

const ScrollTop = ({}) => {
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button onClick={handleTop}>
            <div className="w-10 h-10 md:w-16 md:h-16 bg-custom-grad bg-img-grad rounded-full flex justify-center items-center cursor-pointer ">
                <ArrowUp className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </div>
        </button>
    );
};

export default ScrollTop;
