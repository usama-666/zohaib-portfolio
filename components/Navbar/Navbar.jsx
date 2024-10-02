"use client";
import Link from "next/link";
import React, { useState } from "react";
import Wrapper from "../wrapper/Wrapper";
import { Croissant, MenuIcon, X } from "lucide-react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    // Function to scroll to section smoothly
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="spare-home">
            <Wrapper classname={"w-[90%]"}>
                <div className="relative  w-full  flex  md:justify-between items-center">
                    <div className="w-full md:w-1/4  flex justify-between py-5 ">
                        <div className=" ">
                            <h1 className="text-xl px-4 ">Muhammad Zohaib </h1>
                        </div>

                        <div className=" md:hidden">
                            {!showMenu ? (
                                <MenuIcon size={36} onClick={handleShowMenu} />
                            ) : (
                                <X size={36} onClick={handleShowMenu} />
                            )}
                        </div>
                    </div>

                    <div className=" md:w-3/4 hidden md:flex md:justify-end nav-items ">
                        <ul className="flex justify-center  text-lg">
                            <li className="text-white  px-3 py-2 mx-3">
                                <Link href={"/"}> Home</Link>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <Link href={"#projects"}> Projects</Link>
                            </li>

                            <li className="text-white px-3 py-2 mx-3">
                                <Link href={"/"}> About me</Link>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <Link href={"/"}> Get In Touch</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Mobile Screens */}
                {showMenu && (
                    <div className="absolute t0p-[78px] right-0 md:hidden  w-full  bg-bgcolor flex justify-end   z-50 py-5">
                        <ul className="w-full  flex flex-col gap-4 justify-center items-center h-full text-white">
                            <li className="w-full text-center py-4 hover:border hover:border-main rounded-md">
                                <Link href={"/"}> Home</Link>
                            </li>
                            <li className="w-full text-center py-4 hover:border hover:border-main rounded-md">
                                <Link
                                    href={"#projects"}
                                    onClick={handleShowMenu}
                                >
                                    {" "}
                                    Projects
                                </Link>
                                {/* <button onClick={scrollToSection}>
                                    Projects
                                </button> */}
                            </li>
                            <li className="w-full text-center py-4 hover:border hover:border-main rounded-md">
                                <Link href={"/"}> About me</Link>
                            </li>
                            <li className="w-full text-center py-4 hover:border hover:border-main rounded-md">
                                <Link href={"/"}> Get In Touch</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Navbar;
