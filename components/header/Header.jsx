"use client";

import React from "react";
import HeaderAnimation from "../HeaderAnimation";

const Header = () => {
    return (
        <div className="relative bg-custom-grad bg-img-grad w-full h-[500px] md:h-[620px]   ">
            <div className="">
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover "
                >
                    <source
                        src={"./bg-demo.mp4"} // Replace this with your video URL
                        type="video/mp4"
                    />
                    {/* Your browser does not support the video tag. */}
                </video>
            </div>
            <div className="relative z-10 flex justify-center items-center h-full bg-black bg-opacity-75">
                <HeaderAnimation />
            </div>
        </div>
    );
};

export default Header;
