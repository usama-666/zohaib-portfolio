"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/Wrapper";
import { MenuIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [isClient, setIsClient] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Set to true once the component mounts on the client side
        setIsClient(true);
    }, []);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    if (!isClient) {
        return null; // Avoid rendering if component isn't mounted on client side
    }

    return (
        <div className="spare-home">
            <Wrapper classname={"w-[90%]"}>
                <div className="relative w-full flex md:justify-between items-center">
                    <div className="w-full md:w-1/4 flex justify-between py-5">
                        <div>
                            <Link href={"/"} className="text-xl px-4">
                                Muhammad Zohaib
                            </Link>
                        </div>
                        <div className="md:hidden">
                            {!showMenu ? (
                                <MenuIcon size={36} onClick={handleShowMenu} />
                            ) : (
                                <X size={36} onClick={handleShowMenu} />
                            )}
                        </div>
                    </div>

                    {/* Desktop navigation */}
                    <div className="md:w-3/4 hidden md:flex md:justify-end nav-items">
                        <ul className="flex justify-center text-lg">
                            <li className="text-white px-3 py-2 mx-3">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <Link
                                    href={
                                        router.pathname === "/"
                                            ? `#projects`
                                            : `/#projects`
                                    }
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <Link
                                    href={
                                        router.pathname === "/"
                                            ? `#about-me`
                                            : `/#about-me`
                                    }
                                >
                                    About me
                                </Link>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <Link
                                    href={
                                        router.pathname === "/"
                                            ? `#get-in-touch`
                                            : `/#get-in-touch`
                                    }
                                >
                                    Get In Touch
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile navigation */}
                {showMenu && (
                    <div className="absolute top-[78px] right-0 md:hidden w-full bg-bgcolor flex justify-end z-50 py-5">
                        <ul className="w-full flex flex-col gap-4 justify-center items-center h-full text-white">
                            <Link
                                className="w-full"
                                href="/"
                                onClick={handleShowMenu}
                            >
                                <li className="w-full text-center py-4  rounded-md">
                                    Home
                                </li>
                            </Link>
                            <Link
                                className="w-full"
                                href={
                                    router.pathname === "/"
                                        ? `#projects`
                                        : `/#projects`
                                }
                                onClick={handleShowMenu}
                            >
                                <li className="w-full text-center py-4  rounded-md">
                                    Projects
                                </li>
                            </Link>
                            <Link
                                className="w-full"
                                href={
                                    router.pathname === "/"
                                        ? `#about-me`
                                        : `/#about-me`
                                }
                                onClick={handleShowMenu}
                            >
                                <li className="w-full text-center py-4  rounded-md">
                                    About me
                                </li>
                            </Link>
                            <Link
                                className="w-full"
                                href={
                                    router.pathname === "/"
                                        ? `#get-in-touch`
                                        : `/#get-in-touch`
                                }
                                onClick={handleShowMenu}
                            >
                                <li className="w-full text-center py-4  rounded-md">
                                    Get In Touch
                                </li>
                            </Link>
                        </ul>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Navbar;
