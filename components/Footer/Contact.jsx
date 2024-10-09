import Button from "@/utils/Button";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
        <footer
            className="flex flex-col items-center gap-10 my-20"
            id="get-in-touch"
        >
            <div className="w-full">
                <h1 className="text-xl md:text-4xl font-bold text-center">
                    Get in Touch
                </h1>
            </div>
            <div className="w-2/3 md:w-1/3 flex justify-center items-center gap-2">
                <Link href="mailto:MZohaibButt045@gmail.com">
                    <Button classname={"w-full px-10 md:px-20 py-2 md:py-5 "}>
                        Mail
                    </Button>
                </Link>
                <a href="/zohaib-cv.pdf" download>
                    <Button classname={"w-full px-10 md:px-20 py-2 md:py-5"}>
                        Resume
                    </Button>
                </a>
            </div>
            <div className="w-2/3 md:w-1/3  flex justify-evenly items-center ">
                <Link
                    href={"https://github.com/MrZohaib045"}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-custom-grad bg-img-grad rounded-full flex justify-center items-center cursor-pointer ">
                        <Github className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </div>
                </Link>
                <Link
                    href={"https://www.linkedin.com/in/zohaib-butt-0b1119269"}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-custom-grad bg-img-grad rounded-full flex justify-center items-center cursor-pointer ">
                        <Linkedin className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </div>
                </Link>
                <Link
                    href={"https://www.instagram.com/z_a._i_.b_i"}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-custom-grad bg-img-grad rounded-full flex justify-center items-center cursor-pointer ">
                        <Instagram className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </div>
                </Link>
                <Link
                    href={"https://www.facebook.com/Raees.e.Aazm"}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-custom-grad bg-img-grad rounded-full flex justify-center items-center cursor-pointer ">
                        <Facebook className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                    </div>
                </Link>
            </div>
            <div className="w-[80%] text-center">
                <h2>@copyright Zohaib Butt Game Dev PVT SINCE 2000</h2>
            </div>
        </footer>
    );
};

export default Contact;
