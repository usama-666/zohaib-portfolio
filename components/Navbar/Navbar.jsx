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
                                {/* <Link> */} <a href="#projects"> Projects</a>
                                {/* </Link> */}
                            </li>

                            <li className="text-white px-3 py-2 mx-3">
                                <a href="#about-me"> About me</a>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <a href={"#get-in-touch"}> Get In Touch</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Mobile Screens */}
                {showMenu && (
                    <div className="absolute t0p-[78px] right-0 md:hidden  w-full  bg-bgcolor flex justify-end   z-50 py-5">
                        <ul className="w-full  flex flex-col gap-4 justify-center items-center h-full text-white">
                            <li className="w-full text-center py-4 hover:border hover:border-main rounded-md">
                                <a href={"/"} onClick={handleShowMenu}>
                                    {" "}
                                    Home
                                </a>
                            </li>
                            <li className="w-full text-center py-4 hover:border hover:border-main rounded-md">
                                <a hhref="#projects" onClick={handleShowMenu}>
                                    {" "}
                                    Projects
                                </a>
                                {/* <button onClick={scrollToSection}>
                                    Projects
                                </button> */}
                            </li>
                            <li className="w-full text-center py-4 hover:border hover:border-main rounded-md">
                                <a href="#about-me" onClick={handleShowMenu}>
                                    {" "}
                                    About me
                                </a>
                            </li>
                            <li className="w-full text-center py-4 hover:border hover:border-main rounded-md">
                                <a
                                    href={"#get-in-touch"}
                                    onClick={handleShowMenu}
                                >
                                    {" "}
                                    Get In Touch
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Navbar;
