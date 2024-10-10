"use client"; // Ensure it's a client-side component in Next.js
import { useState, useEffect } from "react"; // Correct import for useState and useEffect
import { ArrowUp } from "lucide-react";
import React from "react";

const ScrollTop = () => {
    const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        isVisible && (
            <button onClick={scrollToTop} aria-label="Scroll to top">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-custom-grad bg-img-grad rounded-full flex justify-center items-center cursor-pointer">
                    <ArrowUp className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </div>
            </button>
        )
    );
};

export default ScrollTop;
