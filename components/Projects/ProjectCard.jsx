"use client";
import Button from "@/utils/Button";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
const ProjectCard = ({ card }) => {
    // Fallback state for static image (later to be replaced by database URL)
    const [imgSrc, setImgSrc] = useState("/mini.jpg");

    const truncateDesc = card.description.slice(0, 250);
    return (
        <div className="   w-full mx-auto  h-[600px] rounded-lg bg-custom-grad  bg-img-grad glass-border">
            <div className="flex flex-col justify-between   w-full h-full rounded-lg   py-3">
                <div className="p-2">
                    <div className="grid grid-cols-3   bg-blue-300 gap-1">
                        <div className="bg-red-200  col-span-1">
                            <Image
                                src={imgSrc}
                                className="w-auto h-auto"
                                alt="mini"
                                width={500}
                                height={1000}
                            />
                        </div>
                        <div className="bg-red-200  col-span-1">
                            <Image
                                src={imgSrc}
                                className="w-auto h-auto"
                                alt="mini"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="bg-red-200  col-span-1">
                            <Image
                                src={imgSrc}
                                className="w-auto h-auto"
                                alt="mini"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="col-span-3  ">
                            <Image
                                src={imgSrc}
                                className="object-cover"
                                alt="mini"
                                width={1000}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-4  px-3">
                        <h2 className=" text-lg md:text-xl">{card.title}</h2>
                        <p className="text-sm">{truncateDesc}...</p>
                    </div>
                </div>
                <div className="flex  justify-end mx-3">
                    <Link href={`/${card.id}`}>
                        <button className="border-[3px] hover:bg-[#7EFFD980] hover:border-[3px] hover:border-[#7EFFD980] border-[#7EFFD980] px-10 py-2 rounded-md">
                            Visit now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
