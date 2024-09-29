import Link from "next/link";
import React from "react";
import Wrapper from "../wrapper/Wrapper";

const Navbar = () => {
    return (
        <div className="spare-home bg-secondary">
            <Wrapper>
                <div className=" w-full flex  justify-between">
                    <div className=" ">
                        <h1 className="text-[32px] px-4 ">Muhammad Zohaib </h1>
                    </div>
                    <div className="nav-items">
                        <ul className="flex justify-center  text-lg">
                            <li className="text-white  px-3 py-2 mx-3">
                                <Link href={"/home"}> Home</Link>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <Link href={"/"}> Projects</Link>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <Link href={"/"}> Blog</Link>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <Link href={"/"}> About me</Link>
                            </li>
                            <li className="text-white px-3 py-2 mx-3">
                                <Link href={"/"}> Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default Navbar;
