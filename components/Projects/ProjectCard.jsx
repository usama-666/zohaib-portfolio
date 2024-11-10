"use client";
import Button from "@/utils/Button";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
const ProjectCard = ({ card }) => {
    // Fallback state for static image (later to be replaced by database URL)
    // const [imgSrc, setImgSrc] = useState("/mini.jpg");

    const truncateDesc =
        (card?.description && card.description.slice(0, 250)) ||
        card.description;

    const images = Array.isArray(card?.images) ? card.images.slice(0, 3) : []; // Ensure it's an array and slice first 3 items
    const imgSrc = Array.isArray(card?.images) ? card.images[3] : "";
    // const truncateDesc = card.description;
    return (
        <div className="   w-full mx-auto   h-full  rounded-lg bg-custom-grad  bg-img-grad glass-border">
            {/* <div className="flex flex-col justify-between border-2 bg-blue-300  w-full h-full rounded-lg   "> */}
            <div className="p-2   flex justify-between flex-col min-h-[550px] h-full">
                <div className=" flex-grow flex flex-col">
                    <div className="grid grid-cols-3   gap-2 ">
                        {images.map((image, index) => (
                            <div
                                className="relative  h-[100px] col-span-1 bg-gray-[#121212]"
                                key={index}
                            >
                                <Image
                                    src={image}
                                    className="object-cover w-full h-full"
                                    alt="mini"
                                    fill
                                />
                            </div>
                        ))}

                        <div className="relative w-full bg-gray-[#121212] h-[180px]  col-span-3 mx-auto overflow-hidden rounded">
                            <Image
                                src={imgSrc}
                                alt="main"
                                fill
                                // width={1000}
                                // height={1000}
                                className="object-cover w-full h-full"
                                // sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col gap-1  px-3">
                        <h2 className=" text-lg md:text-xl">{card.name}</h2>
                        <p className="text-sm ">{truncateDesc}...</p>
                    </div>
                </div>
                <div className="flex  justify-end mx-3    ">
                    <Link href={`/${card.id}`}>
                        <button className="border-[3px] hover:bg-[#7EFFD980] hover:border-[3px] hover:border-[#7EFFD980] border-[#7EFFD980] px-10 py-2 rounded-md">
                            Visit now
                        </button>
                    </Link>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default ProjectCard;
